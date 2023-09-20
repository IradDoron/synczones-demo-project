import mockDataSkills from '@/data/mockDataSkills';
import SkillsDisplay from '@/shared/SkillsDisplay';

const SkillsManagerPage = () => {
	return (
		<div>
			<h1>Skills Manager</h1>
			<SkillsDisplay skills={mockDataSkills} />
		</div>
	);
};

export default SkillsManagerPage;
