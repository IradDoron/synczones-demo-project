import { LearningResource } from '@/types';
import { useState } from 'react';

type Props = {
	formData: LearningResource;
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
};

const StatusInput = ({ formData, setFormData }: Props) => {
	const [currentStatus, setCurrentStatus] = useState<
		'Not Started' | 'In Progress' | 'Completed'
	>('Not Started');

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setCurrentStatus(value as 'Not Started' | 'In Progress' | 'Completed');
		setFormData({
			...formData,
			status: value as 'Not Started' | 'In Progress' | 'Completed',
		});
	};

	return (
		<div>
			<label>
				Status:{' '}
				<select name='status' onChange={handleChange} value={currentStatus}>
					<option value='In Progress'>In Progress</option>
					<option value='Completed'>Completed</option>
					<option value='Not Started'>Not Started</option>
				</select>
			</label>
		</div>
	);
};

export default StatusInput;
