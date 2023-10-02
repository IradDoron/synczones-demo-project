import { Locale } from '@/i18n.config';
import TasksDisplay from '@/shared/TasksDisplay';
import { getDictionaryServer } from '@/utils/dictionary';

type Props = {
	params: { lang: Locale };
};

const TasksManagerPage = async ({ params: { lang } }: Props) => {
	const dictionary = await getDictionaryServer(lang);
	const { page } = dictionary.app['tasks-manager'];
	return (
		<div>
			<h1>{page.title}</h1>
		</div>
	);
};

export default TasksManagerPage;
