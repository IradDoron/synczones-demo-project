import mockDataSkills from '@/data/mockDataSkills';
import mockDataSkillsCategories from '@/data/mockDataSkillsCategories';
import SkillsCategoriesDisplay from '@/shared/SkillsCategoriesDisplay';
import SkillsDisplay from '@/shared/SkillsDisplay';

const SkillsManagerPage = () => {
	return (
		<div>
			<h1>Skills Manager</h1>

			<SkillsDisplay skills={mockDataSkills} />
			<SkillsCategoriesDisplay skillsCategories={mockDataSkillsCategories} />
		</div>
	);
};

export default SkillsManagerPage;
