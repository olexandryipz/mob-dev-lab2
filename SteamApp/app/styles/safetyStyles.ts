import styled from 'styled-components/native';

interface TabButtonProps {
  active: boolean;
}

export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  flex: 1;
  padding-vertical: 8px;
  align-items: center;
  margin: 1px;
  background-color: ${(props: TabButtonProps) => (props.active ? '#1C202C' : '#303649')};
  border-radius: 8px;
  border-width: ${(props: TabButtonProps) => (props.active ? '1.5px' : '0px')};
  border-color: ${(props: TabButtonProps) => (props.active ? '#303649' : 'transparent')};
`;

export const TabText = styled.Text<TabButtonProps>`
  color: ${(props: TabButtonProps) => (props.active ? '#fff' : '#7B8D9D')};
`;
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



export const CodeContainer = styled.ImageBackground`
  height: 170px;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
  overflow: hidden;
`;

export const GradientOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LoggedText = styled.Text`
  color: #7B8D9D;
  font-size: 16px;
  margin-bottom: 10px;
  z-index: 1;
`;

export const CodeText = styled.Text`
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 4px;
  z-index: 1;
`;

export const ProgressBarContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
  width: 45%;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #1C202C;
  z-index: 1;
`;

export const ProgressFill = styled.View`
  width: 70%;
  background-color: #31BCFC;
`;

export const ProgressEmpty = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const DescriptionContainer = styled.View`
  margin-top: 25px;
  margin-horizontal: 25px;
`;

export const DescriptionText = styled.Text`
  color: #fff;
  margin-bottom: 9px;
  font-size: 16px;
  line-height: 24px;
`;

export const TipText = styled.Text`
  color: #2FB4F1;
  font-size: 15px;
  margin-top: 4px;
  line-height: 24px;
`;

export const OptionsContainer = styled.View`
  background-color: #202532;
  border-radius: 10px;
  padding-vertical: 9px;
  width: 90%;
  align-self: center;
  margin-top: 30px;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #1C202C;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 17px;
`;

export const LastOption = styled(Option)`
  border-bottom-width: 0px;
`;
export const SeparatorLine = styled.View`
  width: 100%;
`;

