'use client';

import mockDataLearningResources from '@/data/mockDataLearningResources';
import CurrencyInput from '@/shared/AddLearningResourceModal/CurrencyInput';
import CurrentMarkInput from '@/shared/AddLearningResourceModal/CurrentMarkInput';
import MarkTypeInput from '@/shared/AddLearningResourceModal/MarkTypeInput';
import RelatedSkillsIdsInput from '@/shared/AddLearningResourceModal/RelatedSkillsIdsInput';
import RelatedTasksIdsInput from '@/shared/AddLearningResourceModal/RelatedTasksIdsInput';
import SimpleInputBlock from '@/shared/AddLearningResourceModal/SimpleInputBlock';
import StatusInput from '@/shared/AddLearningResourceModal/StatusInput';
import SubLearningResourcesInput from '@/shared/AddLearningResourceModal/SubLearningResourcesInput';
import TotalMarkInput from '@/shared/AddLearningResourceModal/TotalMarkInput';
import TypeInput from '@/shared/AddLearningResourceModal/TypeInput';
import { LearningResource } from '@/types';
import { useState } from 'react';

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLearningResourceModal = ({ isOpen, setIsOpen }: Props) => {
	const [formData, setFormData] = useState<LearningResource>({
		id: mockDataLearningResources.length + 1,
		title: '',
		description: '',
		resourceURL: '',
		author: '',
		platform: '',
		platformURL: '',
		cost: 0,
		currency: 'ILS',
		type: 'Course',
		mark: {
			markType: 'Unkown',
			currentMark: '',
			totalMark: '',
			lastTimeMarked: '',
		},
		subLearningResources: [],
		status: 'Not Started',
		relatedTasksIds: [],
		relatedSkillsIds: [],
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const formatFormData = () => {
		const formattedJson = JSON.stringify(formData, null, 2);
		return formattedJson;
	};

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(formatFormData());
		setIsOpen(false);
	};

	if (!isOpen) return null;

	return (
		<div
			style={{
				position: 'fixed',
				width: '100dvw',
				height: '100dvh',
				top: 0,
				left: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.75)',
				overflow: 'scroll',
			}}
		>
			<div
				style={{
					backgroundColor: 'white',
					position: 'relative',
					padding: '3rem 8rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					width: 'fit-content',
					margin: 'auto',
				}}
			>
				<h2>Add Learning Resource Modal</h2>
				<p>TODO</p>
				<form onSubmit={handleSubmit}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<SimpleInputBlock formData={formData} setFormData={setFormData} />
						<CurrencyInput handleChange={handleChange} />
						<TypeInput handleChange={handleChange} />

						<MarkTypeInput setFormData={setFormData} formData={formData} />
						<CurrentMarkInput
							setFormData={setFormData}
							formData={formData}
							marktype={formData.mark.markType}
						/>
						<TotalMarkInput
							setFormData={setFormData}
							formData={formData}
							marktype={formData.mark.markType}
						/>

						<SubLearningResourcesInput
							formData={formData}
							setFormData={setFormData}
						/>
						<StatusInput formData={formData} setFormData={setFormData} />
						<RelatedTasksIdsInput
							formData={formData}
							setFormData={setFormData}
						/>
						<RelatedSkillsIdsInput
							formData={formData}
							setFormData={setFormData}
						/>
					</div>
				</form>
				<pre
					style={{
						fontSize: '1.25rem',
					}}
				>
					{JSON.stringify(formData, null, 2)}
				</pre>
				<button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
				<button
					onClick={() => setIsOpen(false)}
					style={{
						position: 'absolute',
						top: '1rem',
						right: '1rem',
					}}
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default AddLearningResourceModal;
