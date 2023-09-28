import { Task } from '@/types';

type Props = {
	formData: Task;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
};

const StatusInput = ({ formData, handleChange }: Props) => {
	return (
		<section>
			<h3 className='hidden'>Status</h3>
			<details>
				<summary>Status</summary>
				<select name='status' onChange={handleChange} value={formData.status}>
					<option value='Not Started'>Not Started</option>
					<option value='In Progress'>In Progress</option>
					<option value='Completed'>Completed</option>
				</select>
			</details>
		</section>
	);
};

export default StatusInput;
