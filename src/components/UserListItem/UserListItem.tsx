import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {userListItemStyles} from './userListItemStyles';
import {useTranslation} from 'react-i18next';
import notifee from '@notifee/react-native';
import {set} from '../../redux/userSlice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';

type UserListItemType = {
  user: any;
};

export function UserListItem({user}: UserListItemType) {
  // const navigation = useNavigation(); // Assuming useNavigation hook is available in the component
  const {username, email} = user;
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
  const {t} = useTranslation();

  const handlePressItem = async () => {
    dispatch(set(user));
    await notifee.requestPermission();

    // Create a notification channel (Android only)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display notification
    await notifee.displayNotification({
      title: user.username,
      body: user.phone,
      android: {
        smallIcon: 'ic_notification',
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  return (
    <TouchableOpacity
      style={userListItemStyles(isDarkMode).container}
      onPress={handlePressItem}>
      <View style={userListItemStyles(isDarkMode).titleContainer}>
        <Text style={userListItemStyles(isDarkMode).title}>
          {t('USER.NAME')}
        </Text>
        <Text style={userListItemStyles(isDarkMode).userName}>{username}</Text>
      </View>
      <View style={userListItemStyles(isDarkMode).childContainer}>
        <Text style={userListItemStyles(isDarkMode).title}>
          {t('USER.EMAIL')}
        </Text>
        <Text style={userListItemStyles(isDarkMode).email}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
}
