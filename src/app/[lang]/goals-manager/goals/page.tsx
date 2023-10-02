import mockDataGoals from '@/data/mockDataGoals';
import GoalsDisplay from '@/shared/GoalsDisplay';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/dictionary';

const GoalsPage = async ({ params: { lang } }: LangParam) => {
	const dictionary = await getDictionaryServer(lang);
	const { page } = dictionary.app['goals-manager'].goals;
	return (
		<div>
			<h1>{page.title}</h1>
			<GoalsDisplay goals={mockDataGoals} />
		</div>
	);
};

export default GoalsPage;
