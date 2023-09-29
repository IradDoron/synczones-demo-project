'use client';

import AddLearningResourceModal from '@/shared/AddLearningResourceModal';
import LearningResourcesDisplay from '@/shared/LearningResourcesDisplay';
import { useState } from 'react';

const LearningManagerPage = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	return (
		<div>
			<h1>Learning Manager</h1>
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
