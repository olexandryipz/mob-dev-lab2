import React, { useContext } from 'react';
import { Switch } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as S from '../styles/extraStyles';
import themeContext from '../theme/themeContext';
import { EventRegister } from 'react-native-event-listeners';

export default function ExtraScreen() {
  const theme = useContext(themeContext);

  const handleThemeChange = (value: boolean) => {
    EventRegister.emit('ChangeTheme', value);
  };

  return (
    <S.Container style={{
      backgroundColor: theme.theme === 'light' ? '#f2f2f2' : theme.background,
    }}>
      <S.ProfileContainer >
        <S.ProfileImageWrapper>
          <S.ProfileImage source={require('../../assets/images/navigation.png')} />
          <S.OnlineDot />
        </S.ProfileImageWrapper>
        <S.Name style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>Oleksandr Sushko</S.Name>
        <S.Group style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>IPZ-23-1</S.Group>
      </S.ProfileContainer>

      <S.OptionsContainer style={{
        backgroundColor: theme.theme === 'light' ? '#e9e9e9' : theme.background,
        alignItems: 'center',
        paddingVertical: 20,
      }}>
        <Switch
          value={theme.theme === 'dark'}
          onValueChange={handleThemeChange}
          thumbColor={theme.theme === 'dark' ? '#1C202C' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </S.OptionsContainer>

      <S.OptionsContainer
  style={{
    backgroundColor: theme.theme === 'light' ? '#e9e9e9' : '#2A2F3B', 
  }}
>
  <S.Option>
    <S.OptionText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
      Settings
    </S.OptionText>
    <Ionicons name="chevron-forward" size={22} color="#4B5664" />
  </S.Option>

  <S.SeparatorLine
    style={{
      backgroundColor: theme.theme === 'light' ? '#ccc' : '#171A24', 
    }}
  />

  <S.LastOption>
    <S.OptionText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
      Logout
    </S.OptionText>
    <Ionicons name="chevron-forward" size={22} color="#4B5664" />
  </S.LastOption>
</S.OptionsContainer>

    </S.Container>
  );
}
