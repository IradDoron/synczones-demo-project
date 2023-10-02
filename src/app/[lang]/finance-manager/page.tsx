import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/dictionary';

const FinanceManagerPage = async ({ params: { lang } }: LangParam) => {
	const dictionary = await getDictionaryServer(lang);
	const { page } = dictionary.app['finance-manager'];
	return (
		<div>
			<h1>{page.title}</h1>
		</div>
	);
};

export default FinanceManagerPage;
