'use client';

import { Task } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const RelatedGoalsIdsInput = ({ formData, setFormData }: Props) => {
	const [currentRelatedGoalId, setCurrentRelatedGoalId] = useState<number>(0);

	const handleCurrentRelatedGoalIdChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = event.target;
		setCurrentRelatedGoalId(parseInt(value));
	};

	const handleAddRelatedGoalIdClick = () => {
		if (!formData.relatedGoalsIds) {
			setFormData({
				...formData,
				relatedGoalsIds: [currentRelatedGoalId],
			});
			return;
		}
		const allRelatedGoalsIds = [
			...formData.relatedGoalsIds,
			currentRelatedGoalId,
		];

		setFormData({
			...formData,
			relatedGoalsIds: allRelatedGoalsIds,
		});

		setCurrentRelatedGoalId(0);
	};

	return (
		<section>
			<h3 className='hidden'>Related Goals IDs</h3>
			<details>
				<summary>Related Goals IDs</summary>
				<label>
					Add new goal ID:{' '}
					<input
						type='number'
						name='relatedGoalId'
						value={currentRelatedGoalId}
						onChange={handleCurrentRelatedGoalIdChange}
					/>
					<button onClick={handleAddRelatedGoalIdClick}>Add</button>
				</label>
				<p>
					Current related goals IDs:{' '}
					{getCommaSeparatedStringsFromArray(formData.relatedGoalsIds)}
				</p>
			</details>
		</section>
	);
};

export default RelatedGoalsIdsInput;
