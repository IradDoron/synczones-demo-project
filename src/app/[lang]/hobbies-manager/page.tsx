import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

type Props = {
	params: { lang: Locale };
};

const HobbiesManagerPage = async ({ params: { lang } }: Props) => {
	const dictionary = await getDictionary(lang);
	const { page } = dictionary.app['hobbies-manager'];
	return (
		<div>
			<h1>{page.title}</h1>
		</div>
	);
};

export default HobbiesManagerPage;
