'use client';

import { Task } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const SubTasksIdsInput = ({ formData, setFormData }: Props) => {
	const [currentSubTaskId, setCurrentSubTaskId] = useState<number>(0);

	const handleCurrentSubTaskIdChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = event.target;
		setCurrentSubTaskId(parseInt(value));
	};

	const handleAddSubTaskIdClick = () => {
		if (!formData.subTasksIds) {
			setFormData({
				...formData,
				subTasksIds: [currentSubTaskId],
			});
			return;
		}
		const allSubTasksIds = [...formData.subTasksIds, currentSubTaskId];

		setFormData({
			...formData,
			subTasksIds: allSubTasksIds,
		});

		setCurrentSubTaskId(0);
	};

	return (
		<section>
			<h3 className='hidden'>Sub Tasks IDs</h3>
			<details>
				<summary>Sub Tasks IDs</summary>

				<label>
					Add new sub task ID:{' '}
					<input
						type='number'
						name='subTaskId'
						value={currentSubTaskId}
						onChange={handleCurrentSubTaskIdChange}
					/>
				</label>
				<button onClick={handleAddSubTaskIdClick}>Add</button>
				<p>
					Current sub tasks IDs:{' '}
					{getCommaSeparatedStringsFromArray(formData.subTasksIds)}
				</p>
			</details>
		</section>
	);
};

export default SubTasksIdsInput;
