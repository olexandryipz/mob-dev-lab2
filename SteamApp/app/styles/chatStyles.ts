import styled from 'styled-components/native';

interface TabButtonProps {
  active: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1C202C;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
  margin-horizontal: 20px;
  background-color: #303649;
  border-radius: 8px;
`;

export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  flex: 1;
  padding-vertical: 8px;
  align-items: center;
  margin: 1px;
  background-color: ${({ active }: TabButtonProps) => (active ? '#1C202C' : '#303649')};
  border-radius: 8px;
  border-width: ${({ active }: TabButtonProps) => (active ? '1.5px' : '0px')};
  border-color: ${({ active }: TabButtonProps) => (active ? '#303649' : 'transparent')};
`;

export const TabText = styled.Text<TabButtonProps>`
  color: ${({ active }: TabButtonProps) => (active ? '#fff' : '#7B8D9D')};
`;


export const ChatItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
  padding-vertical: 13px;
`;

export const AvatarContainer = styled.View`
  position: relative;
  padding-vertical: 1px;

`;

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 10px;
`;

export const ChatInfo = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const ChatName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ChatMessageRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4px;
`;

export const ChatMessagePrefix = styled.Text`
  color: #fff;
  margin-right: 4px;
`;

export const ChatMessageText = styled.Text`
  color: #7B8D9D;
`;

export const ChatDate = styled.Text`
  color: #7B8D9D;
  margin-left: 6px;
`;

export const UnreadCount = styled.View`
  background-color: #4EB2FF;
  border-radius: 12px;
  padding-horizontal: 8px;
  padding-vertical: 3px;
`;

export const UnreadText = styled.Text`
  color: #1C202C;
  font-size: 12px;
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 4px;
  margin-right: 4px;
`;
