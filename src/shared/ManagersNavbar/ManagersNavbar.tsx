import { LangParam, Managers } from '@/types';
import { getDictionaryServer } from '@/utils/dictionary';
import Link from 'next/link';

type Props = {
	baseUrl: Managers;
} & LangParam;

const ManagersNavbar = async ({ baseUrl, params: { lang } }: Props) => {
	const dictionary = await getDictionaryServer(lang);
	const manager = baseUrl;

	const urlsEntries = Object.entries(dictionary.app[manager].layout.urls).map(
		([key, value]) => [key, value]
	);

	return (
		<nav>
			<ul>
				{urlsEntries.map((entry) => {
					const [url, title] = entry;
					if (url === 'main-page') {
						return (
							<li key={url}>
								<Link href={`/${lang}/${baseUrl}`}>{title}</Link>
							</li>
						);
					} else {
						return (
							<li key={url}>
								<Link href={`/${lang}/${baseUrl}/${url}`}>{title}</Link>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
};

export default ManagersNavbar;
