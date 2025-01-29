import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {DetailsScreen, SettingsScreen, UsersScreen} from '../screens';
import {DetailsIcon, ListIcon, ProfileIcon} from '../assets/icons';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../redux/hooks.ts';

export type StackNavigatorParamList = {
  DetailsScreen: never;
  UsersScreen: never;
  SettingsScreen: never;
};

const Tab = createBottomTabNavigator<StackNavigatorParamList>();

export function TabNavigations() {
  const {t} = useTranslation();
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: tabBarStyle(isDarkMode).headerStyle,
        headerTitleStyle: tabBarStyle(isDarkMode).headerTitleStyle,
        headerTitleContainerStyle:
          tabBarStyle(isDarkMode).headerTitleContainerStyle,
        tabBarStyle: tabBarStyle(isDarkMode).tabBarContainer,
        tabBarInactiveTintColor: isDarkMode ? '#B0BEC5' : '#7C819E',
        tabBarActiveTintColor: isDarkMode ? '#80CBC4' : '#E7E2DE',
      }}>
      <Tab.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          title: t('USERS'),
          tabBarIcon: icon => (
            <View style={tabBarStyle(isDarkMode).iconContainer}>
              <ListIcon isActive={icon.focused} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          title: t('DETAILS'),
          tabBarIcon: icon => (
            <View style={tabBarStyle(isDarkMode).iconContainer}>
              <DetailsIcon isActive={icon.focused} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          title: t('SETTINGS'),
          tabBarIcon: icon => (
            <View style={tabBarStyle(isDarkMode).iconContainer}>
              <ProfileIcon isActive={icon.focused} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarStyle = (isDarkMode: boolean) =>
  StyleSheet.create({
    tabBarContainer: {
      position: 'relative',
      backgroundColor: isDarkMode ? '#121212' : '#004D40', // меняем фон в зависимости от темы
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 70,
      paddingTop: 8,
      paddingBottom: 8,
      borderTopWidth: 2,
      borderColor: isDarkMode ? '#333333' : '#00796B',
    },
    headerStyle: {
      backgroundColor: isDarkMode ? '#121212' : '#004D40',
    },
    headerTitleContainerStyle: {
      width: '100%',
      alignItems: 'center',
    },
    headerTitleStyle: {
      color: isDarkMode ? '#B2DFDB' : '#E0F7FA',
    },
    iconContainer: {
      borderRadius: 30,
      backgroundColor: isDarkMode ? '#333333' : '#00796B',
      padding: 8,
    },
  });
