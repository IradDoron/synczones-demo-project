import { LearningResource } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: LearningResource;
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
};

const RelatedSkillsIdsInput = ({ formData, setFormData }: Props) => {
	const [currentRelatedSkillsId, setCurrentRelatedSkillsId] =
		useState<number>(0);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const intValue = parseInt(value);
		setCurrentRelatedSkillsId(intValue);
	};

	const handleAddId = () => {
		setFormData({
			...formData,
			relatedSkillsIds: [
				...(formData.relatedSkillsIds || []),
				currentRelatedSkillsId,
			],
		});
	};

	return (
		<div>
			<label>
				Related Skill ID:{' '}
				<input
					type='number'
					placeholder='Learning Resource ID'
					name='learningResourceID'
					value={currentRelatedSkillsId}
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

export default RelatedSkillsIdsInput;
