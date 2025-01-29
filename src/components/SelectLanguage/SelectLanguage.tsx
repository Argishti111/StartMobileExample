import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {selectLanguageStyles} from './selectLanguageStyles';
import {useAppSelector} from '../../redux/hooks.ts';

export function SelectLanguage({title}: {title: string}) {
  const [showLanguageList, setShowLanguageList] = useState(false);
  const {t, i18n} = useTranslation();
  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);

  const languageList = [
    {label: t('ENGLISH'), value: 'en', id: 1},
    {label: t('RUSSIAN'), value: 'ru', id: 2},
  ];

  const languages: any = {
    'en-US': {title: 'English'},
    'ru-RU': {title: 'Русский'},
    en: {title: 'English'},
    ru: {title: 'Русский'},
  };

  console.log(i18n.language);

  const toggleLanguageList = () => {
    setShowLanguageList(!showLanguageList);
  };

  const changeLanguageItem = async (language: string) => {
    await i18n.changeLanguage(language);
    setShowLanguageList(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleLanguageList}
        style={selectLanguageStyles(isDarkMode).container}>
        <Text style={selectLanguageStyles(isDarkMode).title}>{title}</Text>
        <View
          style={selectLanguageStyles(isDarkMode).selectedLanguageContainer}>
          <Text style={selectLanguageStyles(isDarkMode).selectedLanguage}>
            {languages[i18n.language]?.title}
          </Text>
          <View
            style={{
              transform: [{rotate: showLanguageList ? '90deg' : '0deg'}],
            }}
          />
        </View>
      </TouchableOpacity>
      {showLanguageList && (
        <View style={selectLanguageStyles(isDarkMode).languageListContainer}>
          {languageList.map(language => (
            <TouchableOpacity
              style={selectLanguageStyles(isDarkMode).languageItemContainer}
              key={language.id}
              onPress={() => changeLanguageItem(language.value)}>
              <Text style={selectLanguageStyles(isDarkMode).languageItem}>
                {language.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
