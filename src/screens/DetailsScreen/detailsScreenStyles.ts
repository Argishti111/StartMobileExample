import {StyleSheet} from 'react-native';

export const detailsScreenStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: isDarkMode ? '#121212' : '#F9FAFB',
    },
    scrollView: {
      paddingBottom: 24,
    },
  });
