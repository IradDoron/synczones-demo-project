'use client';

import { Task, TaskPriority } from '@/types';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const ProgressInput = ({ formData, setFormData }: Props) => {
	const handleProgressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = parseInt(e.target.value) as Task['progress'];
		setFormData({
			...formData,
			progress: value,
		});
	};
	return (
		<section>
			<h3 className='hidden'>Progress</h3>
			<details>
				<summary>Progress</summary>
				<select
					name='progress'
					value={formData.progress}
					onChange={handleProgressChange}
				>
					<option value={0}>0%</option>
					<option value={10}>10%</option>
					<option value={20}>20%</option>
					<option value={30}>30%</option>
					<option value={40}>40%</option>
					<option value={50}>50%</option>
					<option value={60}>60%</option>
					<option value={70}>70%</option>
					<option value={80}>80%</option>
					<option value={90}>90%</option>
					<option value={100}>100%</option>
				</select>
			</details>
		</section>
	);
};

export default ProgressInput;
