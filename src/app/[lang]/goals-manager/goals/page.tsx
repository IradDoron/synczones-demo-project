import mockDataGoals from '@/data/mockDataGoals';
import GoalsDisplay from '@/shared/GoalsDisplay';

const GoalsPage = () => {
	return (
		<div>
			<h1>Goals Page</h1>
			<GoalsDisplay goals={mockDataGoals} />
		</div>
	);
};

export default GoalsPage;
