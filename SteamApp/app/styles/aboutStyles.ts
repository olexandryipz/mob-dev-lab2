import styled from 'styled-components/native';

interface TabButtonProps {
  active: boolean;
}

export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  background-color: ${({ active }: TabButtonProps) => (active ? '#31BCFC' : '#303649')};
  border-radius: 10px;
  padding: 11px 15px;
`;


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1C202C;
`;

export const Subtitle = styled.Text`
  color: #7B8D9D;
  font-size: 17px;
  margin: 1px 20px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 22px 0 15px 17px;
  gap: 10px;
`;

export const SearchIconContainer = styled.TouchableOpacity`
  background-color: #303649;
  padding: 12px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;



export const TabText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const PostContainer = styled.View`
  background-color: #1C202C;
  margin: 15px;
  padding: 5px;
`;


export const PostImage = styled.Image`
  width: 100%;
  height: 210px;
  border-radius: 8px;
  margin-vertical: 10px;
`;

export const PostTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 5px;
  line-height: 24px;
`;

export const PostText = styled.Text`
  color: #7B8D9D;
  font-size: 16px;
  line-height: 24px;
`;

export const PostDivider = styled.View`
  height: 1px;
  background-color: #303649;
  margin-top: 15px;
`;

export const PostActions = styled.View`
  flex-direction: row;
  margin-top: 12px;
  align-items: center;
`;

export const ActionButton = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const ActionText = styled.Text`
  color: #7B8D9D;
  margin-left: 5px;
`;

export const ActionTextGreen = styled.Text`
  color: #2FB97F;
  margin-left: 5px;
`;

export const Separator = styled.View`
  height: 10px;
  background-color: #171A24;
  width: 100%;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 20px;
`;

export const NameDateContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const PostName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const PostDate = styled.Text`
  color: #7B8D9D;
  font-size: 14px;
  margin-top: 5px;
`;
