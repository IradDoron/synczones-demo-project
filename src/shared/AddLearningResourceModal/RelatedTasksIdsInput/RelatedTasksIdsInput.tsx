import { LearningResource } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: LearningResource;
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
};

const RelatedTasksIdsInput = ({ formData, setFormData }: Props) => {
	const [currentRelatedTasksId, setCurrentRelatedTasksId] = useState<number>(0);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const intValue = parseInt(value);
		setCurrentRelatedTasksId(intValue);
	};

	const handleAddId = () => {
		setFormData({
			...formData,
			relatedTasksIds: [
				...(formData.relatedTasksIds || []),
				currentRelatedTasksId,
			],
		});
	};

	return (
		<div>
			<label>
				Related Task ID:{' '}
				<input
					type='number'
					placeholder='Learning Resource ID'
					name='learningResourceID'
					value={currentRelatedTasksId}
					onChange={onChange}
				/>
			</label>
			<button onClick={handleAddId}>Add</button>
			<p>
				IDs:{' '}
				<span>
					{getCommaSeparatedStringsFromArray(formData.relatedTasksIds || [])}
				</span>
			</p>
		</div>
	);
};

export default RelatedTasksIdsInput;
