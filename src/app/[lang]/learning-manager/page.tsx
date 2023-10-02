'use client';

import { Locale } from '@/i18n.config';
import AddLearningResourceModal from '@/shared/AddLearningResourceModal';
import LearningResourcesDisplay from '@/shared/LearningResourcesDisplay';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { useState } from 'react';

type Props = {
	params: { lang: Locale };
};

const LearningManagerPage = ({ params: { lang } }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const dictionary = getDictionaryClient(lang);
	const { page } = dictionary.app['learning-manager'];
	return (
		<div>
			<h1>{page.title}</h1>
			<LearningResourcesDisplay />
			<br />
			<button onClick={() => setIsModalOpen(true)}>
				Add Learning Resource
			</button>
			<AddLearningResourceModal
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
			/>
		</div>
	);
};

export default LearningManagerPage;
