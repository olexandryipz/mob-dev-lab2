import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners';
import { View, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import themeContext from '../theme/themeContext';
import theme from '../theme/theme';

export default function TabLayout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
      console.log('Theme changed:', data);
    });

    return () => {
      if (typeof listener === 'string') {
        EventRegister.removeEventListener(listener);
      }
    };
  }, []);

  const currentTheme = darkMode ? theme.dark : theme.light;

  const activeIconColor = currentTheme.theme === 'light' ? '#31BCFC' : '#fff';
  const inactiveIconColor = currentTheme.theme === 'light' ? '#303649' : '#555B6F';

  return (
    <themeContext.Provider value={currentTheme}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: activeIconColor,
          tabBarInactiveTintColor: inactiveIconColor,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: currentTheme.backgroundColor,
            height: 70,
            paddingBottom: 10,
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            marginTop: 5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="bag-outline" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <Ionicons name="chatbubble-outline" size={26} color={color} />
                <View style={styles.badge} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="safety"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="shield-outline" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
  name="extra"
  options={{
    tabBarIcon: () => (
      <Image
        source={require('../../assets/images/navigation.png')}
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          resizeMode: 'contain',
        }}
      />
    ),
    tabBarItemStyle: {
      opacity: 1,
    },
  }}
/>

      </Tabs>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -2,
    right: -6,
    backgroundColor: '#4EB2FF',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
