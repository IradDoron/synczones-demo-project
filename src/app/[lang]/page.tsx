import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h1>{page.title}</h1>
		</div>
	);
}
