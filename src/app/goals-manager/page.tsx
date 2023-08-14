import mockDataGoalsManager from '@/data/mockDataGoalsManager';
import GoalsDisplay from '@/shared/GoalsDisplay';
import VisionsDisplay from '@/shared/VisionsDisplay';

const GoalsManagerPage = () => {
	return (
		<div>
			<h1>Goals Manager</h1>
			<GoalsDisplay goals={mockDataGoalsManager.goals} />
			<VisionsDisplay visions={mockDataGoalsManager.visions} />
		</div>
	);
};

export default GoalsManagerPage;
