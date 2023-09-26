import { LearningResource } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: LearningResource;
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
};

const SubLearningResourcesInput = ({ formData, setFormData }: Props) => {
	const [currentSubLearningResourceID, setCurrentSubLearningResourceID] =
		useState<number>(0);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const intValue = parseInt(value);
		setCurrentSubLearningResourceID(intValue);
	};

	const handleAddId = () => {
		setFormData({
			...formData,
			subLearningResources: [
				...(formData.subLearningResources || []),
				currentSubLearningResourceID,
			],
		});
	};

	return (
		<div>
			<label>
				Sub Learning Resource ID:{' '}
				<input
					type='number'
					placeholder='Learning Resource ID'
					name='learningResourceID'
					value={currentSubLearningResourceID}
					onChange={onChange}
				/>
			</label>
			<button onClick={handleAddId}>Add</button>
			<p>
				IDs:{' '}
				<span>
					{getCommaSeparatedStringsFromArray(
						formData.subLearningResources || []
					)}
				</span>
			</p>
		</div>
	);
};

export default SubLearningResourcesInput;
