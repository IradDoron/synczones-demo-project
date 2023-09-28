'use client';

import { Task } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const LabelsInput = ({ formData, setFormData }: Props) => {
	const [currentLabel, setCurrentLabel] = useState<string>('');

	const handleCurrentLabelChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = event.target;
		setCurrentLabel(value);
	};

	const handleAddLabelClick = () => {
		if (!formData.labels || formData.labels.length === 0) {
			setFormData({
				...formData,
				labels: [currentLabel],
			});
			return;
		}
		const allLabels = [...formData.labels, currentLabel];

		setFormData({
			...formData,
			labels: allLabels,
		});

		setCurrentLabel('');
	};

	return (
		<section>
			<h3 className='hidden'>Labels</h3>
			<details>
				<summary
					style={{
						fontSize: '1.2rem',
						fontWeight: 'bold',
					}}
				>
					Labels
				</summary>
				<label>
					Add new label:{' '}
					<input
						type='text'
						name='attachment'
						value={currentLabel}
						onChange={handleCurrentLabelChange}
					/>
				</label>
				<button onClick={handleAddLabelClick}>Add</button>
				<p>
					Current labels: {getCommaSeparatedStringsFromArray(formData.labels)}
				</p>
			</details>
		</section>
	);
};

export default LabelsInput;
