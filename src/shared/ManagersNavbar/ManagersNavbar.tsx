import { Locale } from '@/i18n.config';
import { kebabCaseToTitleCase } from '@/utils';
import { getDictionary } from '@/utils/dictionary';
import Link from 'next/link';

type Managers =
	| 'career-manager'
	| 'collaboration-manager'
	| 'finance-manager'
	| 'goals-manager'
	| 'health-manager'
	| 'hobbies-manager'
	| 'learning-manager'
	| 'organization-manager'
	| 'projects-manager'
	| 'relationships-manager'
	| 'routines-manager'
	| 'skills-manager'
	| 'tasks-manager'
	| 'time-manager';

type Props = {
	baseUrl: Managers;
	params: { lang: Locale };
};

const ManagersNavbar = async ({  baseUrl, params: { lang } }: Props) => {
	const dictionary = await getDictionary(lang);
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
