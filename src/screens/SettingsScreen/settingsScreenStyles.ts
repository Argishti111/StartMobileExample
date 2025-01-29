import {StyleSheet} from 'react-native';

export const settingsScreenStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      justifyContent: 'space-between',
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
    },
    section: {
      gap: 15,
    },
    settingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : '#FFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
    },
    settingLabel: {
      fontWeight: '800',
      fontSize: 18,
      color: isDarkMode ? '#FFF' : '#333',
    },
    logoutContainer: {
      alignItems: 'center',
    },
    logoutButton: {
      backgroundColor: '#ff4d4f',
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 8,
      width: '100%',
    },
    logoutText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'center',
    },
  });
