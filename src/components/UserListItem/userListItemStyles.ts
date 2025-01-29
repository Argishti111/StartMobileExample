import {StyleSheet} from 'react-native';

export const userListItemStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#004D40' : '#E0F7FA', // меняем фон в зависимости от темы
      marginBottom: 16,
      borderRadius: 12,
      padding: 12,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      borderRadius: 8,
      padding: 8,
      backgroundColor: isDarkMode ? '#00796B' : '#B2DFDB', // меняем фон в зависимости от темы
    },
    childContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      borderRadius: 8,
      padding: 8,
      backgroundColor: isDarkMode ? '#004D40' : '#E0F2F1', // меняем фон в зависимости от темы
    },
    title: {
      fontFamily: 'Poppins-Bold',
      color: isDarkMode ? '#B2DFDB' : '#004D40', // меняем цвет в зависимости от темы
      fontWeight: '700',
      fontSize: 18,
    },
    userName: {
      color: isDarkMode ? '#B2DFDB' : '#00796B', // меняем цвет в зависимости от темы
      fontWeight: '600',
      fontSize: 16,
    },
    email: {
      color: isDarkMode ? '#B2DFDB' : '#004D40', // меняем цвет в зависимости от темы
      fontWeight: '600',
      fontSize: 16,
    },
  });
