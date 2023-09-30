import { Locale } from '@/i18n.config';
import LocaleSwitcher from '@/shared/LocaleSwitcher';
import { getDictionary } from '@/utils/dictionary';
import Link from 'next/link';

type Props = {
	params: { lang: Locale };
};

const Navbar = async ({ params }: Props) => {
	const { lang } = params;
	const dictionary = await getDictionary(lang);
	const { Home, Managers } = dictionary.shared.Navbar.Links;

	return (
		<nav className='navbar'>
			<Link href={`/${lang}`}>{Home}</Link>
			<div className='dropdown'>
				<button className='dropbtn'>{Managers.Tab}</button>
				<div className='dropdown-content'>
					<Link href={`/${lang}/tasks-manager`}>
						{Managers['Tasks Manager']}
					</Link>
					<Link href={`/${lang}/career-manager`}>
						{Managers['Career Manager']}
					</Link>
					<Link href={`/${lang}/collaboration-manager`}>
						{Managers['Collaboration Manager']}
					</Link>
					<Link href={`/${lang}/finance-manager`}>
						{Managers['Finance Manager']}
					</Link>

					<Link href={`/${lang}/goals-manager`}>
						{Managers['Goals Manager']}
					</Link>
					<Link href={`/${lang}/health-manager`}>
						{Managers['Health Manager']}
					</Link>
					<Link href={`/${lang}/hobbies-manager`}>
						{Managers['Hobbies Manager']}
					</Link>
					<Link href={`/${lang}/learning-manager`}>
						{Managers['Learning Manager']}
					</Link>
					<Link href={`/${lang}/organization-manager`}>
						{Managers['Organization Manager']}
					</Link>
					<Link href={`/${lang}/projects-manager`}>
						{Managers['Projects Manager']}
					</Link>
					<Link href={`/${lang}/relationships-manager`}>
						{Managers['Relationships Manager']}
					</Link>
					<Link href={`/${lang}/routines-manager`}>
						{Managers['Routines Manager']}
					</Link>
					<Link href={`/${lang}/skills-manager`}>
						{Managers['Skills Manager']}
					</Link>
					<Link href={`/${lang}/time-manager`}>{Managers['Time Manager']}</Link>
				</div>
			</div>
			<LocaleSwitcher />
		</nav>
	);
};

export default Navbar;
