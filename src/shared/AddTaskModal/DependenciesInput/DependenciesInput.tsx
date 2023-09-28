'use client';

import { Task } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const DependenciesInput = ({ formData, setFormData }: Props) => {
	const [currentDependencyId, setCurrentDependencyId] = useState<number>(0);

	const handleCurrentDependencyIdChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = event.target;
		setCurrentDependencyId(parseInt(value));
	};

	const handleAddDependencyIdClick = () => {
		if (!formData.dependencies) {
			setFormData({
				...formData,
				dependencies: [currentDependencyId],
			});
			return;
		}
		const allDependencies = [...formData.dependencies, currentDependencyId];

		setFormData({
			...formData,
			dependencies: allDependencies,
		});

		setCurrentDependencyId(0);
	};

	return (
		<section>
			<h3 className='hidden'>Dependencies</h3>
			<details>
				<summary>Dependencies</summary>

				<label>
					Add new dependency ID:{' '}
					<input
						type='number'
						name='dependencyId'
						value={currentDependencyId}
						onChange={handleCurrentDependencyIdChange}
					/>
				</label>
				<button onClick={handleAddDependencyIdClick}>Add</button>
				<p>
					Current dependencies IDs:{' '}
					{getCommaSeparatedStringsFromArray(formData.dependencies)}
				</p>
			</details>
		</section>
	);
};

export default DependenciesInput;
