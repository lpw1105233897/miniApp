// src/i18next.d.ts
import 'react-i18next';
import en from '../public/locales/lang/en.json';

declare module 'react-i18next' {
	interface Resources {
		translation: typeof en;
	}
}
