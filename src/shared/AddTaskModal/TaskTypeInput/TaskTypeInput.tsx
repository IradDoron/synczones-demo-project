import { Task } from '@/types';

type Props = {
	formData: Task;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
};

const TaskTypeInput = ({ formData, handleChange }: Props) => {
	return (
		<section>
			<h3 className='hidden'>Task Type</h3>
			<details>
				<summary>Task Type</summary>
				<select
					name='taskType'
					onChange={handleChange}
					value={formData.taskType}
				>
					<option value='General'>General</option>
					<option value='Goal'>Goal</option>
					<option value='Learning Resource'>Learning Resource</option>
				</select>
			</details>
		</section>
	);
};

export default TaskTypeInput;
