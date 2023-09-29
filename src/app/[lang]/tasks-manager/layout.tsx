import ManagersNavbar from '@/shared/ManagersNavbar';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const TasksManagerLayout = ({ children }: Props) => {
	const urls = ['main-page', 'dashboard', 'tasks'];
	const baseUrl = '/tasks-manager';
	return (
		<div>
			<br />
			<br />
			<ManagersNavbar urls={urls} baseUrl={baseUrl} />
			{children}
		</div>
	);
};

export default TasksManagerLayout;
