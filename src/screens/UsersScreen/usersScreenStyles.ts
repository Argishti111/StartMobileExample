import {StyleSheet} from 'react-native';

export const usersScreenStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    // Общие стили
    container: {
      flex: 1,
      padding: 16,
      paddingTop: 24,
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF', // меняем фон в зависимости от темы
    },
    searchField: {
      marginBottom: 20,
    },
    card: {
      borderRadius: 16,
      padding: 18,
      marginBottom: 14,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 4,
      backgroundColor: isDarkMode ? '#333333' : '#E0F7FA', // меняем фон в зависимости от темы
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? '#80CBC4' : '#00796B', // меняем цвет в зависимости от темы
    },
    subtitle: {
      fontSize: 15,
      color: isDarkMode ? '#B2DFDB' : '#004D40', // меняем цвет в зависимости от темы
    },
    button: {
      backgroundColor: '#00796B',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 18,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '600',
    },
  });
