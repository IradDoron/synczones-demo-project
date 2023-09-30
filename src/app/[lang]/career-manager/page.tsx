import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

type Props = {
	params: { lang: Locale };
};

const CareerManagerPage = async ({ params: { lang } }: Props) => {
	const dictionary = await getDictionary(lang);
	const { page } = dictionary.app['career-manager'];
	return <h1>{page.title}</h1>;
};

export default CareerManagerPage;
