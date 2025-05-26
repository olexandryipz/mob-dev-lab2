import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1C202C;
  padding: 20px;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const ProfileImageWrapper = styled.View`
  position: relative;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const OnlineDot = styled.View`
  position: absolute;
  bottom: 5px;
  right: -2px;
  background-color: #00D44B;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #1C202C;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 12px;
`;

export const Group = styled.Text`
  color: #fff;
  margin-top: 4px;
  font-size: 18px;
`;

export const OptionsContainer = styled.View`
  background-color: #202532;
  border-radius: 10px;
  padding-vertical: 9px;
  width: 90%;
  align-self: center;
  margin-top: -7px;
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
