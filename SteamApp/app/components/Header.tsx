import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useContext } from 'react';
import themeContext from '../theme/themeContext';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.logoContainer}>
        <Image
          source={
            theme.theme === 'light'
              ? require('../../assets/images/steam_dark.png')
              : require('../../assets/images/steam.png')
          }
          style={styles.logo}
        />
        <Text style={[styles.title, { color: theme.color }]}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.searchIcon}>
        <Ionicons name="search" size={28} color="#555B6F" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 42,
    height: 42,
    marginRight: 10,
    marginTop: 1,
  },
  title: {
    fontSize: 33,
  },
  searchIcon: {
    marginRight: 10,
  },
});
