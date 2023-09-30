'use client';

import { i18n } from '@/i18n.config';
import { getDictionaryClientFromPathName } from '@/utils/getDictionaryClient';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LocaleSwitcher = () => {
	const pathName = usePathname();

	const dictionary = getDictionaryClientFromPathName(pathName);

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<div
			className='dropdown'
			style={{
				marginLeft: 'auto',
			}}
		>
			<button className='dropbtn'>
				{dictionary.shared.LocaleSwitcher.Language}
			</button>

			<div className='dropdown-content'>
				{i18n.locales.map((locale) => {
					return (
						<Link key={locale} href={redirectedPathName(locale)}>
							{locale}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default LocaleSwitcher;
