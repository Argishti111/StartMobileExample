import React from 'react';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  View,
} from 'react-native';
import {SearchField, UserListItem} from '../../components';
import {getAllUsers, getSearchedUsers} from '../../api';
import {usersScreenStyles} from './usersScreenStyles';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {set as loadingSet} from '../../redux/loadingSlice.ts';
import {set as searchTextSet} from '../../redux/searchTextSlice.ts';

export function UsersScreen() {
  const {t} = useTranslation();
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);

  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.allUsers);
  const isLoadingScreen = useAppSelector(state => state.loading.state);
  const searchText = useAppSelector(state => state.searchText.searchText);

  const handleSearchUser = () => {
    dispatch(loadingSet(true));
    searchText ? getSearchedUsers(searchText) : getAllUsers();
  };

  useEffect(() => {
    dispatch(loadingSet(true));
    getAllUsers();
  }, []);

  const onRefresh = () => {
    dispatch(loadingSet(true));
    dispatch(searchTextSet(''));
    getAllUsers();
  };

  const handleChangeSearchField = (searchText: string) => {
    dispatch(searchTextSet(searchText));
  };

  return (
    <SafeAreaView style={usersScreenStyles(isDarkMode).container}>
      {isLoadingScreen ? (
        <ActivityIndicator size="large" color="#FFA001" />
      ) : (
        <React.Fragment>
          <View style={usersScreenStyles(isDarkMode).searchField}>
            <SearchField
              handleChangeText={handleChangeSearchField}
              value={searchText}
              handleSearchPress={handleSearchUser}
              placeholder={t('SEARCH.PLACEHOLDER')}
            />
          </View>
          <FlatList
            data={users.allUsers}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({item}) => <UserListItem user={item} />}
            refreshControl={
              <RefreshControl
                refreshing={isLoadingScreen}
                onRefresh={onRefresh}
                progressBackgroundColor={'#FFF'}
                colors={['#FF9D00']}
              />
            }
          />
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}
