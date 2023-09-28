'use client';

import { Task, TaskPriority } from '@/types';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const PriorityInput = ({ formData, setFormData }: Props) => {
	const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value as TaskPriority;
		setFormData({
			...formData,
			priority: value,
		});
	};
	return (
		<section>
			<h3 className='hidden'>Priority</h3>
			<details>
				<summary>Priority</summary>
				<select
					name='priority'
					value={formData.priority || 'Moderate'}
					onChange={handlePriorityChange}
				>
					<option value='Lowest'>Lowest</option>
					<option value='Very Low'>Very Low</option>
					<option value='Low'>Low</option>
					<option value='Moderate Low'>Moderate Low</option>
					<option value='Moderate'>Moderate</option>
					<option value='Moderate High'>Moderate High</option>
					<option value='High'>High</option>
					<option value='Very High'>Very High</option>
					<option value='Highest'>Highest</option>
				</select>
			</details>
		</section>
	);
};

export default PriorityInput;
