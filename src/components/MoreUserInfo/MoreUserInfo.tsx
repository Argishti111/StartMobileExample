import {Text, View} from 'react-native';
import React from 'react';
import {DetailsScreenType} from '../../screens';
import {moreUserInfoStyles} from './moreUserInfoStyles';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../redux/hooks.ts';

export function MoreUserInfo({currentUser}: DetailsScreenType) {
  const {t} = useTranslation();
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
  const {name, username, phone, company, email, address} = currentUser;

  return (
    <View style={moreUserInfoStyles(isDarkMode).container}>
      <Text style={moreUserInfoStyles(isDarkMode).name}>{name}</Text>
      <View style={moreUserInfoStyles(isDarkMode).childContainers}>
        <Text style={moreUserInfoStyles(isDarkMode).title}>
          {t('USER.NAME')}
        </Text>
        <Text style={moreUserInfoStyles(isDarkMode).description}>
          {username}
        </Text>
      </View>
      <View style={moreUserInfoStyles(isDarkMode).childContainers}>
        <Text style={moreUserInfoStyles(isDarkMode).title}>
          {t('USER.EMAIL')}
        </Text>
        <Text style={moreUserInfoStyles(isDarkMode).description}>{email}</Text>
      </View>
      <View style={moreUserInfoStyles(isDarkMode).childContainers}>
        <Text style={moreUserInfoStyles(isDarkMode).title}>
          {t('USER.PHONE')}
        </Text>
        <Text style={moreUserInfoStyles(isDarkMode).description}>{phone}</Text>
      </View>
      <View style={moreUserInfoStyles(isDarkMode).childContainers}>
        <Text style={moreUserInfoStyles(isDarkMode).title}>
          {t('USER.ADDRESS')}
        </Text>
        <Text style={moreUserInfoStyles(isDarkMode).description}>
          {address?.city}
        </Text>
      </View>
      <View style={moreUserInfoStyles(isDarkMode).companyContainer}>
        <Text style={moreUserInfoStyles(isDarkMode).companyTitle}>
          {t('COMPANY.ABOUT')}
        </Text>
        <View style={moreUserInfoStyles(isDarkMode).companyInfoContainer}>
          <Text style={moreUserInfoStyles(isDarkMode).title}>
            {t('COMPANY.NAME')}
          </Text>
          <Text style={moreUserInfoStyles(isDarkMode).companyDescription}>
            {company?.name}
          </Text>
        </View>
        <View style={moreUserInfoStyles(isDarkMode).companyInfoContainer}>
          <Text style={moreUserInfoStyles(isDarkMode).title}>
            {t('COMPANY.NAME')}
          </Text>
          <Text style={moreUserInfoStyles(isDarkMode).companyDescription}>
            {company?.catchPhrase}
          </Text>
        </View>
      </View>
    </View>
  );
}
