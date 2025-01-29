import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {signInStyles} from './signInStyles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {set as authSet} from '../../redux/authorizeSlice.ts';

export const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);

  const handleSignIn = () => {
    if (!email || !password) {
      return setError(t('SIGN_IN.ERROR'));
    }

    if (email === 'user' && password === '1') {
      dispatch(authSet(true));
      return;
    }

    setError(t('INVALID_CREDENTIALS'));
  };

  return (
    <SafeAreaView style={signInStyles(isDarkMode).container}>
      <Text style={signInStyles(isDarkMode).title}>{t('SIGN_IN')}</Text>

      <TextInput
        style={[
          signInStyles(isDarkMode).input,
          error && !email && {borderColor: 'red'},
        ]}
        placeholder={t('EMAIL')}
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[
          signInStyles(isDarkMode).input,
          error && !password && {borderColor: 'red'},
        ]}
        placeholder={t('PASSWORD')}
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={signInStyles(isDarkMode).errorText}>{error}</Text>

      <TouchableOpacity
        style={signInStyles(isDarkMode).button}
        onPress={handleSignIn}>
        <Text style={signInStyles(isDarkMode).buttonText}>{t('SIGN_IN')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
