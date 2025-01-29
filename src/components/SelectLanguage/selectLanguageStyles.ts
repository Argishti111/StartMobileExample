import {Dimensions, StyleSheet} from 'react-native';

export const selectLanguageStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderBottomColor: isDarkMode ? '#FFFFFF' : '#D1D1D1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      backgroundColor: isDarkMode ? '#333' : '#F9F9F9',
    },
    title: {
      color: isDarkMode ? '#FFF' : '#333',
      fontSize: 16,
      fontFamily: 'ABeeZee-Regular',
      fontWeight: 'bold',
    },
    selectedLanguageContainer: {
      flexDirection: 'row',
      gap: 17,
    },
    selectedLanguage: {
      backgroundColor: isDarkMode ? '#555' : '#DDDDDD',
      color: isDarkMode ? '#FFA001' : '#333',
      borderRadius: 21,
      paddingHorizontal: 21,
      fontSize: 14,
    },
    languageListContainer: {
      width: '100%',
      zIndex: 100,
      paddingVertical: 16,
      gap: 10,
      backgroundColor: isDarkMode ? '#444' : '#FFFFFF',
    },
    languageItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 10,
      marginLeft: 30,
      borderBottomColor: isDarkMode ? '#FFFFFF' : '#D1D1D1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      width: Dimensions.get('window').width - 80,
    },
    languageItem: {
      color: isDarkMode ? '#FFF' : '#333',
      fontSize: 16,
      fontFamily: 'ABeeZee-Regular',
    },
    toggleButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#6200EE',
      borderRadius: 8,
      alignItems: 'center',
    },
  });
