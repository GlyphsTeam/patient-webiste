import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';


const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
}


i18next.use(initReactI18next).init({
    resources,
    lng:"ar",
    fallbackLng:"en",  // use en if detected lng is not available
    debug:true,
    interpolation:{
        escapeValue:false
    }
});


export default i18next