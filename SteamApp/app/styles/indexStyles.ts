import styled from 'styled-components/native';

interface FilterButtonProps {
  active: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1C202C;
`;

export const BannerContainer = styled.View`
  width: 100%;
  margin: 15px 0;
  border-radius: 12px;
  overflow: hidden;
  flex-direction: row;
  position: relative;
`;

export const BannerImage = styled.Image`
  width: 355px;
  height: 260px;
  border-radius: 12px;
  margin-left: 15px;
`;

export const CornerIcon = styled.Image`
  width: 12px;
  height: 260px;
  position: absolute;
  right: 0;
  resize-mode: cover;
`;

export const BannerContent = styled.View`
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

export const BannerTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const BannerSubtitle = styled.Text`
  color: #ccc;
  margin-top: 4px;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const DiscountBoxBanner = styled.View`
  background-color: #00D44B80;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
`;

export const DiscountTextBanner = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const PriceBoxBanner = styled.View`
  background-color: #00000099;
  padding: 4px 8px;
`;

export const OldPriceBanner = styled.Text`
  color: #ccc;
  text-decoration: line-through;
  font-size: 16px;
`;

export const NewPriceBanner = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const FilterRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 15px 0;
  margin-left: 17px;
  gap: 10px;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  background-color: ${({ active }: FilterButtonProps) => (active ? '#31BCFC' : '#303649')};
  border-radius: 10px;
  padding: 11px 15px;
`;




export const FilterText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const GameItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px;
  margin: 0 15px 15px;
  border-radius: 10px;
`;

export const GameImage = styled.Image`
  width: 78px;
  height: 56px;
  margin-right: 15px;
  border-radius: 5px;
`;

export const GameTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const GamePlatform = styled.Text`
  color: #ccc;
  margin-top: 3px;
`;

export const PriceBlock = styled.View`
  align-items: flex-end;
  margin-left: 10px;
`;

export const NewPrice = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 6px;
`;

export const OldPrice = styled.Text`
  color: #999;
  text-decoration: line-through;
  font-size: 14px;
  margin-right: 6px;
`;

export const DiscountBox = styled.View`
  background-color: #00D44B80;
  border-radius: 4px;
  padding: 5px 6px;
  margin-top: 4px;
  margin-right: -6px;
`;

export const DiscountText = styled.Text`
  color: #fff;
  font-size: 12px;
`;
export const GameInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

