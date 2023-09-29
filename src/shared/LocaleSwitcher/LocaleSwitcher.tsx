'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';

export default function LocaleSwitcher() {
	const pathName = usePathname();

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
				alignSelf: 'flex-end',
				marginLeft: 'auto',
			}}
		>
			<button className='dropbtn'>Language</button>

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
}
