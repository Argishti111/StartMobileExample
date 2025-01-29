import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TabNavigations} from './TabNavigations';
import {SignInScreen} from '../screens';
import {useAppDispatch, useAppSelector} from '../redux/hooks.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {set} from '../redux/darkModeSlice.ts';

export interface VerificationScreenParams {
  phoneNumber: string;
  phoneCodeId: number;
}

export type StackNavigatorParamList = {
  ListScreen: never;
  SignInScreen: never;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

export function NavigationScreens() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const isDarkMode = (await AsyncStorage.getItem('isDarkMode')) === 'true';
      dispatch(set(isDarkMode));
    })();
  }, []);

  const isAuthorized = useAppSelector(state => state.auth.isAuthorized);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            {isAuthorized ? (
              <Stack.Screen
                name="ListScreen"
                component={TabNavigations}
                options={{
                  headerShown: false,
                  cardStyle: {backgroundColor: '#FFFFFF'},
                }}
              />
            ) : (
              <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                  headerShown: false,
                  cardStyle: {backgroundColor: '#FFFFFF'},
                }}
              />
            )}
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
