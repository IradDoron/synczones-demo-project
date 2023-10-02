import ManagersNavbar from '@/shared/ManagersNavbar';
import { LangParam } from '@/types';

import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
} & LangParam;

const GoalsManagerLayout = async ({ children, params: { lang } }: Props) => {
	const baseUrl = 'goals-manager';
	return (
		<div>
			<br />
			<br />
			<ManagersNavbar baseUrl={baseUrl} params={{ lang }} />
			{children}
		</div>
	);
};

export default GoalsManagerLayout;
