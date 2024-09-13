// src/i18n.ts
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './language/en.json';
import zh from './language/zh.json';

i18n
	.use(HttpBackend) // 使用 HTTP 后端加载语言文件
	.use(LanguageDetector) // 自动检测用户语言
	.use(initReactI18next) // 将 i18next 绑定到 react-i18next
	.init({
		fallbackLng: localStorage.getItem('language') || 'en', // 默认语言
		debug: true, // 开启调试模式
		interpolation: {
			escapeValue: false, // react 已经防止 XSS，不需要转义
		},
		resources: {
			en: {translation: en},
			zh: {translation: zh},
		},
	});

export default i18n;
