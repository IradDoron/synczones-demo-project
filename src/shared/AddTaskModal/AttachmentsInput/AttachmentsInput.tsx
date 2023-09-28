'use client';

import { Task } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';
import { useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const AttachmentsInput = ({ formData, setFormData }: Props) => {
	const [currentAttachment, setCurrentAttachment] = useState<string>('');

	const handleCurrentAttachmentChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = event.target;
		setCurrentAttachment(value);
	};

	const handleAddAttachmentClick = () => {
		if (!formData.attachments || formData.attachments.length === 0) {
			setFormData({
				...formData,
				attachments: [currentAttachment],
			});
			return;
		}
		const allAttachments = [...formData.attachments, currentAttachment];

		setFormData({
			...formData,
			attachments: allAttachments,
		});

		setCurrentAttachment('');
	};

	return (
		<section>
			<h3 className='hidden'>Attachments</h3>
			<details>
				<summary>Attachments</summary>
				<label>
					Attach new URL:{' '}
					<input
						type='text'
						name='attachment'
						value={currentAttachment}
						onChange={handleCurrentAttachmentChange}
					/>
				</label>
				<button onClick={handleAddAttachmentClick}>Add</button>
				<p>
					Current attachment URLs:{' '}
					{getCommaSeparatedStringsFromArray(formData.attachments)}
				</p>
			</details>
		</section>
	);
};

export default AttachmentsInput;
