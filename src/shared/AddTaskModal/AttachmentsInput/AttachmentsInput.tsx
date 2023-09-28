'use client';

import { Task, TaskAttachment } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const AttachmentsInput = ({ formData, setFormData }: Props) => {
	const [currentAttachment, setCurrentAttachment] = useState<TaskAttachment>({
		id: (formData.attachments?.length || 0) + 1,
		title: '',
		url: '',
		notes: '',
	});

	useEffect(() => {
		setCurrentAttachment({
			id: (formData.attachments?.length || 0) + 1,
			title: '',
			url: '',
			notes: '',
		});
	}, [formData.attachments]);

	const handleCurrentAttachmentChange = (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { value } = event.target;
		setCurrentAttachment({
			...currentAttachment,
			[event.target.name]: value,
		});
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

		setCurrentAttachment({
			id: currentAttachment.id + 1,
			title: '',
			url: '',
			notes: '',
		});
	};

	return (
		<section>
			<h3 className='hidden'>Attachments</h3>
			<details>
				<summary>Attachments</summary>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<p>
						Attachment ID: <span>{currentAttachment.id}</span>
					</p>
					<label>
						Attach new title:{' '}
						<input
							type='text'
							name='title'
							value={currentAttachment.title}
							onChange={handleCurrentAttachmentChange}
						/>
					</label>
					<label>
						Attach new URL:{' '}
						<input
							type='text'
							name='url'
							value={currentAttachment.url}
							onChange={handleCurrentAttachmentChange}
						/>
					</label>
					<label>
						Attach new notes:{' '}
						<textarea
							name='notes'
							value={currentAttachment.notes}
							onChange={handleCurrentAttachmentChange}
						/>
					</label>
					<button onClick={handleAddAttachmentClick}>Add</button>
				</div>
				<p>Current attachment URLs: </p>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>URL</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						{formData.attachments?.map((attachment) => (
							<tr key={attachment.id}>
								<td>{attachment.id}</td>
								<td>{attachment.title}</td>
								<td>{attachment.url}</td>
								<td>{attachment.notes}</td>
							</tr>
						))}
					</tbody>
				</table>
			</details>
		</section>
	);
};

export default AttachmentsInput;
