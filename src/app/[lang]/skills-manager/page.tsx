import mockDataSkills from '@/data/mockDataSkills';
import mockDataSkillsCategories from '@/data/mockDataSkillsCategories';
import { Locale } from '@/i18n.config';
import SkillsCategoriesDisplay from '@/shared/SkillsCategoriesDisplay';
import SkillsDisplay from '@/shared/SkillsDisplay';
import { getDictionary } from '@/utils/dictionary';

type Props = {
	params: { lang: Locale };
};

const SkillsManagerPage = async ({ params: { lang } }: Props) => {
	const dictionary = await getDictionary(lang);
	const { page } = dictionary.app['skills-manager'];
	return (
		<div>
			<h1>{page.title}</h1>

			<SkillsDisplay skills={mockDataSkills} />
			<SkillsCategoriesDisplay skillsCategories={mockDataSkillsCategories} />
		</div>
	);
};

export default SkillsManagerPage;
