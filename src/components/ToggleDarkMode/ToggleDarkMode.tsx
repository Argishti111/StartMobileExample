import React from 'react';
import {Switch, View} from 'react-native';
import {toggleDarkModeStyles} from './toggleDarkModeStyles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {set} from '../../redux/darkModeSlice.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ToggleDarkMode() {
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
  const dispatch = useAppDispatch();

  const toggleSwitch = async () => {
    dispatch(set(!isDarkMode));
    await AsyncStorage.setItem('isDarkMode', `${!isDarkMode}`);
  };
  return (
    <View style={toggleDarkModeStyles.switchContainer}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleSwitch}
        thumbColor={'#FFA001'}
      />
    </View>
  );
}
