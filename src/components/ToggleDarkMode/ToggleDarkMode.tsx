import React from 'react';
import {Switch, View} from 'react-native';
import {toggleDarkModeStyles} from './toggleDarkModeStyles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {set} from '../../redux/darkModeSlice.ts';

export function ToggleDarkMode() {
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
  const dispatch = useAppDispatch();

  const toggleSwitch = () => {
    dispatch(set(!isDarkMode));
  };
  return (
    <View style={toggleDarkModeStyles.switchContainer}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleSwitch}
        thumbColor={'#FFA001'}
        // trackColor={{false: '#004D41', true: '#004D40'}}
      />
    </View>
  );
}
