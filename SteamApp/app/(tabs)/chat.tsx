import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
import Header from '../components/Header';
import * as S from '../styles/chatStyles';
import themeContext from '../theme/themeContext';


interface ChatItem {
  id: string;
  name: string;
  message: string;
  date: string;
  avatar: any;
  unreadCount?: number;
}

const initialChatData: ChatItem[] = [
  {
    id: '1',
    name: 'Mark Dyson',
    message: "I'm already starting to play",
    date: '14 Jun',
    avatar: require('../../assets/images/smile.png'),
    unreadCount: 1,
  },
  {
    id: '2',
    name: 'Mark Dyson',
    message: 'You: Ok',
    date: '14 Jun',
    avatar: require('../../assets/images/smile.png'),
  },
  {
    id: '3',
    name: 'Player123',
    message: 'You: Ok',
    date: '14 Jun',
    avatar: require('../../assets/images/steamava.png'),
  },
  {
    id: '4',
    name: 'Player123',
    message: 'You: Ok',
    date: '14 Jun',
    avatar: require('../../assets/images/steamava.png'),
  },
  {
    id: '5',
    name: 'Player',
    message: 'Hello!',
    date: '12 Jun',
    avatar: require('../../assets/images/putania.png'),
  },
  {
    id: '6',
    name: 'Player',
    message: 'Hello!',
    date: '12 Jun',
    avatar: require('../../assets/images/putania.png'),
  },
  {
    id: '7',
    name: 'Σxpresso',
    message: 'Ok',
    date: '',
    avatar: require('../../assets/images/expresso.png'),
  },
  {
    id: '8',
    name: 'Σxpresso',
    message: 'Ok',
    date: '',
    avatar: require('../../assets/images/expresso.png'),
  },
];

export default function ChatScreen() {
  const [chatData, setChatData] = useState<ChatItem[]>(initialChatData);
  const [activeTab, setActiveTab] = useState<'Open chats' | 'My friends'>('Open chats');
  const theme = useContext(themeContext);

  const renderItem = ({ item }: { item: ChatItem }) => (
    <S.ChatItem style={{
      backgroundColor: theme.theme === 'light' ? '#f2f2f2' : theme.background,
    }}>
      <S.AvatarContainer >
        <S.Avatar source={item.avatar} />
      </S.AvatarContainer>

      <S.ChatInfo>
        <S.ChatName style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>{item.name}</S.ChatName>

        {item.message.startsWith('You:') ? (
          <S.ChatMessageRow >
            <S.ChatMessagePrefix style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>You:</S.ChatMessagePrefix>
            <S.ChatMessageText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>{item.message.replace('You:', '').trim()}</S.ChatMessageText>
            {item.date ? <S.ChatDate style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}> • {item.date}</S.ChatDate> : null}
          </S.ChatMessageRow>
        ) : (
          <S.ChatMessageText style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}>
            {item.message}
            {item.date ? <S.ChatDate style={{ color: theme.theme === 'light' ? '#303649' : theme.color }}> • {item.date}</S.ChatDate> : null}
          </S.ChatMessageText>
        )}
      </S.ChatInfo>

      {item.unreadCount ? (
  <S.UnreadCount>
    <S.UnreadText>{item.unreadCount}</S.UnreadText>
  </S.UnreadCount>
) : (item.id === '2' || item.id === '3' || item.id === '4') ? (
  <S.Dot
    style={{
      backgroundColor: theme.theme === 'light' ? '#303649' : '#fff', 
    }}
  />
) : null}

    </S.ChatItem>
  );

  return (
    <S.Container style={{
      backgroundColor: theme.theme === 'light' ? '#f2f2f2' : theme.background,
    }}>
      <Header  title="Chat" />
      <S.TabContainer >
        {['Open chats', 'My friends'].map((tab) => (
          <S.TabButton key={tab} active={activeTab === tab} onPress={() => setActiveTab(tab as any)}>
            <S.TabText active={activeTab === tab}>{tab}</S.TabText>
          </S.TabButton>
        ))}
      </S.TabContainer>

      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </S.Container>
  );
}
