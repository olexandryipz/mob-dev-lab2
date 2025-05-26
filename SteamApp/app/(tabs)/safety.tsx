import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import * as S from '../styles/safetyStyles';
import themeContext from '../theme/themeContext';

export default function SafetyScreen() {
  const [activeTab, setActiveTab] = useState<'Guard' | 'Confirmations'>('Guard');
  const theme = useContext(themeContext);

  return (
    <S.Container
      style={{
        backgroundColor: theme.theme === 'light' ? '#f2f2f2' : theme.background,
      }}
    >
      <Header title="Safety" />

      <S.TabContainer>
        <S.TabButton active={activeTab === 'Guard'} onPress={() => setActiveTab('Guard')}>
          <S.TabText active={activeTab === 'Guard'}>Guard</S.TabText>
        </S.TabButton>
        <S.TabButton active={activeTab === 'Confirmations'} onPress={() => setActiveTab('Confirmations')}>
          <S.TabText active={activeTab === 'Confirmations'}>Confirmations</S.TabText>
        </S.TabButton>
      </S.TabContainer>

      <S.CodeContainer source={require('../../assets/images/back.png')}>
        <LinearGradient
          colors={['#1C202C', 'transparent']}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.6 }}
        />
        <S.LoggedText>Logged in as player</S.LoggedText>
        <S.CodeText style={{ color: theme.theme === 'light' ? '#fff' : theme.color }}>N5KCV</S.CodeText>

        <S.ProgressBarContainer>
          <S.ProgressFill />
          <S.ProgressEmpty />
        </S.ProgressBarContainer>
      </S.CodeContainer>

      <S.DescriptionContainer>
        <S.DescriptionText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
          You’ll enter your code each time you enter your password to sign in to your Steam account.
        </S.DescriptionText>
        <S.TipText>
          Tip: If you don't share your PC, you can select "Remember my password" when you sign in to the PC client to enter your password and authenticator code less often.
        </S.TipText>
      </S.DescriptionContainer>

      <S.OptionsContainer
  style={{
    backgroundColor: theme.theme === 'light' ? '#e9e9e9' : '#2A2F3B',
  }}
>
  <S.Option>
    <S.OptionText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
      Remove Authenticator
    </S.OptionText>
    <Ionicons name="chevron-forward" size={22} color="#4B5664" />
  </S.Option>
  <S.SeparatorLine style={{ backgroundColor: theme.theme === 'light' ? '#ccc' : '#171A24' }} />

  <S.Option>
    <S.OptionText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
      My Recovery Code
    </S.OptionText>
    <Ionicons name="chevron-forward" size={22} color="#4B5664" />
  </S.Option>
  <S.SeparatorLine style={{ backgroundColor: theme.theme === 'light' ? '#ccc' : '#171A24' }} />

  <S.Option>
    <S.OptionText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
      Help
    </S.OptionText>
    <Ionicons name="chevron-forward" size={22} color="#4B5664" />
  </S.Option>
</S.OptionsContainer>

    </S.Container>
  );
}
