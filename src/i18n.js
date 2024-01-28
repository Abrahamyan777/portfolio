import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enTranslation from  "./locales/en/translation.json";
import amTranslation from './locales/am/translation.json';
import ruTranslation from './locales/ru/translation.json';


i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,

        whitelist: ['en', 'ru', 'am'],
        detection: {
            order: ["localStoriage", 'cookis'],
            caches: ['localStoriage', 'cookis']
        },
        interpolation: {
            escapeValue: false
        },
        resources: {
            EN: {
                translation: enTranslation,
            },
            AM: {
                translation: amTranslation,
            },
            RU: {
                translation: ruTranslation,
            },
        },
        // lng:
        //     localStorage.getItem('language') || localStorage.getItem('domain')  || "EN",
    
        fallbackLng: 'EN',

    })

export default i18n;