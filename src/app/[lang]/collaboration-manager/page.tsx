import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/dictionary';

const CollaborationManagerPage = async ({ params: { lang } }: LangParam) => {
	const dictionary = await getDictionaryServer(lang);
	const { page } = dictionary.app['collaboration-manager'];
	return (
		<div>
			<h1>{page.title}</h1>
		</div>
	);
};

export default CollaborationManagerPage;
