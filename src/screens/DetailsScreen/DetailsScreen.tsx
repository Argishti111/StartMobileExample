import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MoreUserInfo, ShowEmptyInfo} from '../../components';
import {detailsScreenStyles} from './detailsScreenStyles';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../redux/hooks.ts';

export type DetailsScreenType = {
  currentUser:
    | {
        address: {
          city: string;
          geo: {
            lat: string;
            lng: string;
          };
          street: string;
          suite: string;
          zipcode: string;
        };
        company: {
          bs: string;
          catchPhrase: string;
          name: string;
        };
        email: string;
        id: number;
        name: string;
        phone: string;
        username: string;
      }
    | {};
};

export function DetailsScreen() {
  const {t} = useTranslation();
  const user = useAppSelector(state => state.user);
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
  return (
    <SafeAreaView style={detailsScreenStyles(isDarkMode).container}>
      <ScrollView>
        {Object.keys(user.currentUser)?.length > 0 ? (
          <MoreUserInfo currentUser={user.currentUser} />
        ) : (
          <ShowEmptyInfo title={t('EMPTY')} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
