import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/dictionary';

const GoalsManagerDashboardPage = async ({ params: { lang } }: LangParam) => {
	const dictionary = await getDictionaryServer(lang);
	const { page } = dictionary.app['goals-manager'].dashboard;

	return (
		<div>
			<h1>{page.title}</h1>
		</div>
	);
};

export default GoalsManagerDashboardPage;
