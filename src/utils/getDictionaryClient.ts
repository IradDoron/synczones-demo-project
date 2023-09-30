import { Locale, i18n } from '@/i18n.config';
import en from '@/i18n/en.json';
import he from '@/i18n/he.json';

const getLocale = (pathName: string) => {
	const locale = pathName.split('/')[1];
	if (i18n.locales.includes(locale as Locale)) {
		return locale;
	}
	return i18n.defaultLocale;
};

export const getDictionaryClientFromPathName = (pathName: string) => {
	const locale = getLocale(pathName);
	switch (locale) {
		case 'en':
			return en;
		case 'he':
			return he;
		default:
			return en;
	}
};

export const getDictionaryClient = (locale: Locale) => {
	switch (locale) {
		case 'en':
			return en;
		case 'he':
			return he;
		default:
			return en;
	}
}