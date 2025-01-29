import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SelectLanguage, ToggleDarkMode} from '../../components';
import {useTranslation} from 'react-i18next';
import {set as authSet} from '../../redux/authorizeSlice.ts';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {settingsScreenStyles} from './settingsScreenStyles.ts';

export function SettingsScreen() {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);

  const handleLogout = () => {
    dispatch(authSet(false));
  };

  return (
    <SafeAreaView style={settingsScreenStyles(isDarkMode).container}>
      <View style={settingsScreenStyles(isDarkMode).section}>
        <View style={settingsScreenStyles(isDarkMode).settingRow}>
          <Text style={settingsScreenStyles(isDarkMode).settingLabel}>
            {t('DARK_MODE')}
          </Text>
          <ToggleDarkMode />
        </View>

        <SelectLanguage title={t('LANGUAGE')} />
      </View>

      <View style={settingsScreenStyles(isDarkMode).logoutContainer}>
        <TouchableOpacity
          style={settingsScreenStyles(isDarkMode).logoutButton}
          onPress={handleLogout}>
          <Text style={settingsScreenStyles(isDarkMode).logoutText}>
            {t('EXIT')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
