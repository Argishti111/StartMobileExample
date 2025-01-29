import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TabNavigations} from './TabNavigations';
import {SignInScreen} from '../screens';
import {useAppSelector} from '../redux/hooks.ts';

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
