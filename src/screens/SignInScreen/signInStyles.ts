import {StyleSheet} from 'react-native';

export const signInStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 25,
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      color: isDarkMode ? '#E0E0E0' : '#1F1F1F',
      marginBottom: 40,
    },
    input: {
      height: 55,
      borderColor: isDarkMode ? '#444444' : '#E0E0E0',
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 18,
      marginBottom: 20,
      backgroundColor: isDarkMode ? '#333333' : '#FFFFFF',
      color: isDarkMode ? '#FFFFFF' : '#1F1F1F',
      fontSize: 16,
    },
    errorText: {
      fontWeight: '500',
      color: '#FF3B30',
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 14,
    },
    button: {
      backgroundColor: '#1A73E8',
      paddingVertical: 15,
      borderRadius: 12,
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
  });
