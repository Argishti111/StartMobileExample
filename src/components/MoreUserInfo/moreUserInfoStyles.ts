import {StyleSheet} from 'react-native';

export const moreUserInfoStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
      padding: 16,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkMode ? '#E0E0E0' : '#1F2937',
      marginBottom: 16,
    },
    childContainers: {
      marginBottom: 12,
      padding: 12,
      backgroundColor: isDarkMode ? '#333333' : '#F3F4F6',
      borderRadius: 10,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      color: isDarkMode ? '#E0E0E0' : '#4B5563',
      marginBottom: 4,
    },
    description: {
      fontSize: 16,
      color: isDarkMode ? '#E0E0E0' : '#1F2937',
    },
    companyContainer: {
      marginTop: 24,
      padding: 16,
      backgroundColor: isDarkMode ? '#333333' : '#E5E7EB',
      borderRadius: 12,
    },
    companyTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDarkMode ? '#E0E0E0' : '#374151',
      marginBottom: 12,
    },
    companyInfoContainer: {
      marginBottom: 8,
    },
    companyDescription: {
      fontSize: 16,
      color: isDarkMode ? '#E0E0E0' : '#374151',
    },
  });
