import { kebabCaseToTitleCase } from '@/utils';
import Link from 'next/link';

type Props = {
	urls: string[];
	baseUrl: string;
};

const ManagersNavbar = ({ urls, baseUrl }: Props) => {
	return (
		<nav>
			<ul>
				{urls.map((url) => {
					const title = kebabCaseToTitleCase(url);
					if (url === 'main-page') {
						return (
							<li key={url}>
								<Link href={`${baseUrl}`}>{title}</Link>
							</li>
						);
					} else {
						return (
							<li key={url}>
								<Link href={`${baseUrl}/${url}`}>{title}</Link>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
};

export default ManagersNavbar;
