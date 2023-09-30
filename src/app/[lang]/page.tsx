import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	return (
		<div>
			<h1>HOME</h1>
		</div>
	);
}
