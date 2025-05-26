import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../components/Header';
import * as S from '../styles/aboutStyles';
import themeContext from '../theme/themeContext';

export default function AboutScreen() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Screenshots', 'Artwork', 'Workshop'];
  const theme = useContext(themeContext);

  return (
    <S.Container
      style={{
        backgroundColor: theme.theme === 'light' ? '#f2f2f2' : theme.background,
      }}
    >
      <Header title="Community" />
      <S.Subtitle>Community and official content for all games and software</S.Subtitle>

      <S.TabsContainer>
        <S.SearchIconContainer>
          <Ionicons
            name="search"
            size={20}
            color={theme.theme === 'light' ? '#fff' : '#555B6F'}
          />
        </S.SearchIconContainer>

        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <S.TabButton
              key={tab}
              active={isActive}
              onPress={() => setActiveTab(tab)}
              style={{
                backgroundColor: isActive
                  ? '#4EB2FF' 
                  : theme.theme === 'light'
                  ? '#dcdcdc' 
                  : '#2A2F3B', 
              }}
            >
              <S.TabText
                style={{
                  color: isActive
                    ? '#fff'
                    : theme.theme === 'light'
                    ? '#303649'
                    : '#fff',
                }}
              >
                {tab}
              </S.TabText>
            </S.TabButton>
          );
        })}
      </S.TabsContainer>

      <S.Separator
        style={{
          backgroundColor: theme.theme === 'light' ? '#ccc' : '#171A24',
        }}
      />

      <FlatList
        data={[{}, {}]}
        renderItem={() => (
          <S.PostContainer
            style={{
              backgroundColor:
                theme.theme === 'light' ? '#f2f2f2' : theme.background,
            }}
          >
            <S.PostHeader>
              <S.Avatar source={require('../../assets/images/glob.png')} />

              <S.NameDateContainer>
                <S.PostName
                  style={{
                    color: theme.theme === 'light' ? '#303649' : theme.color,
                  }}
                >
                  Eurogamer
                </S.PostName>
                <S.PostDate
                  style={{
                    color: theme.theme === 'light' ? '#303649' : theme.color,
                  }}
                >
                  yesterday • 2:20 pm
                </S.PostDate>
              </S.NameDateContainer>

              <Ionicons
                name="ellipsis-horizontal"
                size={20}
                color="#555B6F"
                style={{ marginLeft: 'auto' }}
              />
            </S.PostHeader>

            <S.PostImage
              source={require('../../assets/images/community.png')}
            />

            <S.PostTitle
              style={{
                color: theme.theme === 'light' ? '#303649' : theme.color,
              }}
            >
              Florida tourist attraction sues Fortnite, seeks removal of in-game castle
            </S.PostTitle>

            <S.PostText>
              Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.
            </S.PostText>

            <S.PostDivider />

            <S.PostActions>
              <S.ActionButton>
                <Ionicons name="thumbs-up-outline" size={23} color="#2FB97F" />
                <S.ActionTextGreen>324</S.ActionTextGreen>
              </S.ActionButton>
              <S.ActionButton>
                <Ionicons name="chatbubble-outline" size={23} color="#4B5664" />
                <S.ActionText>12</S.ActionText>
              </S.ActionButton>
              <Ionicons
                name="arrow-redo-outline"
                size={25}
                color="#4B5664"
                style={{ marginLeft: 'auto' }}
              />
            </S.PostActions>
          </S.PostContainer>
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        ItemSeparatorComponent={() => (
          <S.Separator
            style={{
              backgroundColor: theme.theme === 'light' ? '#ccc' : '#171A24',
            }}
          />
        )}
      />
    </S.Container>
  );
}
