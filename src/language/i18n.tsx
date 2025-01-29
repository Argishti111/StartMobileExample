import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';
import ru from './locales/ru.json';

const fallback = {languageTag: 'en', isRTL: false};

i18n.use(initReactI18next).init({
  lng: RNLocalize.getLocales()[0]?.languageTag || fallback.languageTag,
  fallbackLng: fallback.languageTag,
  resources: {
    en: {translation: en},
    ru: {translation: ru},
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
