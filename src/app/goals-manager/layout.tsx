import ManagersNavbar from '@/shared/ManagersNavbar';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const GaolsManagerLayout = ({ children }: Props) => {
	const urls = [
		'main-page',
		'dashboard',
		'goals',
		'visions',
		'visions-components',
		'visions-ladders',
	];
	const baseUrl = '/goals-manager';
	return (
		<div>
			<br />
			<br />
			<ManagersNavbar urls={urls} baseUrl={baseUrl} />
			{children}
		</div>
	);
};

export default GaolsManagerLayout;
