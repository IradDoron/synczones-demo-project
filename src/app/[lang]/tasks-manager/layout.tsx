import { Locale } from '@/i18n.config';
import ManagersNavbar from '@/shared/ManagersNavbar';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	params: { lang: Locale };
};

const TasksManagerLayout = ({ children, params }: Props) => {
	const baseUrl = 'tasks-manager';
	return (
		<div>
			<br />
			<br />
			<ManagersNavbar baseUrl={baseUrl} params={params} />
			{children}
		</div>
	);
};

export default TasksManagerLayout;
