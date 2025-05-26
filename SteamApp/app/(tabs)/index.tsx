import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
import Header from '../components/Header';
import * as S from '../styles/indexStyles';
import themeContext from '../theme/themeContext';

interface GameItem {
  id: string;
  title: string;
  price: string;
  image: any;
  platform: string;
  discount?: string;
  oldPrice?: string;
}

const games: GameItem[] = [
  {
    id: '1',
    title: 'Grand Theft Auto V',
    price: '$10',
    image: require('../../assets/images/grand.png'),
    platform: 'Windows',
    discount: '-50%',
    oldPrice: '$20',
  },
  {
    id: '2',
    title: 'Battlefield 4',
    price: '$35',
    image: require('../../assets/images/battle.png'),
    platform: 'Windows',
  },
  {
    id: '3',
    title: 'Factorio',
    price: '$7',
    image: require('../../assets/images/factorio.png'),
    platform: 'Windows, Mac',
  },
  {
    id: '4',
    title: 'Horizon Zero Dawn',
    price: '$38',
    image: require('../../assets/images/horizon.png'),
    platform: 'Windows',
  },
];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState('Top Sellers');

  const theme = useContext(themeContext);

  const renderItem = ({ item }: { item: GameItem }) => (
    <S.GameItem>
      <S.GameImage source={item.image} />

      <S.GameInfo>
        <S.GameTitle style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
          {item.title}
        </S.GameTitle>
        <S.GamePlatform>{item.platform}</S.GamePlatform>
      </S.GameInfo>

      <S.PriceBlock>
        {item.oldPrice && <S.OldPrice>{item.oldPrice}</S.OldPrice>}
        <S.NewPrice style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
          {item.price}
        </S.NewPrice>
        {item.discount && (
          <S.DiscountBox>
            <S.DiscountText>{item.discount}</S.DiscountText>
          </S.DiscountBox>
        )}
      </S.PriceBlock>
    </S.GameItem>
  );

  return (
    <S.Container
      style={{
        backgroundColor: theme.theme === 'light' ? '#f2f2f2' : theme.background,
      }}
    >
      <Header title="Store" />

      <S.BannerContainer>
        <S.BannerImage source={require('../../assets/images/baner1.png')} />
        <S.CornerIcon source={require('../../assets/images/baner.png')} />
        <S.BannerContent>
          <S.BannerTitle>Dead by Daylight</S.BannerTitle>
          <S.BannerSubtitle>Recommended by your friend, Player</S.BannerSubtitle>
          <S.PriceRow>
            <S.DiscountBoxBanner>
              <S.DiscountTextBanner>-70%</S.DiscountTextBanner>
            </S.DiscountBoxBanner>
            <S.PriceBoxBanner>
              <S.OldPriceBanner>$18</S.OldPriceBanner>
            </S.PriceBoxBanner>
            <S.PriceBoxBanner>
              <S.NewPriceBanner>$5</S.NewPriceBanner>
            </S.PriceBoxBanner>
          </S.PriceRow>
        </S.BannerContent>
      </S.BannerContainer>

      <S.FilterRow>
        {['Top Sellers', 'Free to play', 'Early Access', 'Action Games'].map((filter) => (
          <S.FilterButton key={filter} active={filter === activeFilter} onPress={() => setActiveFilter(filter)}>
            <S.FilterText>{filter}</S.FilterText>
          </S.FilterButton>
        ))}
      </S.FilterRow>

      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </S.Container>
  );
}
