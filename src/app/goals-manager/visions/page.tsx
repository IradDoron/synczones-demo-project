import mockDataVisions from '@/data/mockDataVisions';
import VisionsDisplay from '@/shared/VisionsDisplay';

const VisionsPage = () => {
	return (
		<div>
			<h1>Visions Page</h1>
			<VisionsDisplay visions={mockDataVisions} />
		</div>
	);
};

export default VisionsPage;
