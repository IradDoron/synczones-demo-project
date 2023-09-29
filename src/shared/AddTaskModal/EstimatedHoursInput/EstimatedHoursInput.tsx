import { Task } from '@/types';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const EstimatedHoursInput = ({ formData, setFormData }: Props) => {
	const handleEstimatedHoursChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = parseInt(e.target.value);
		setFormData({
			...formData,
			estimatedHours: value,
		});
	};
	return (
		<section>
			<h3 className='hidden'>Estimated Hours</h3>
			<details>
				<summary>Estimated Hours</summary>
				<input
					type='number'
					name='estimatedHours'
					value={formData.estimatedHours || 0}
					onChange={handleEstimatedHoursChange}
				/>
			</details>
		</section>
	);
};

export default EstimatedHoursInput;
