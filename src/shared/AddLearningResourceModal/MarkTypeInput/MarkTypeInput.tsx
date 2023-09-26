import { LearningResource, LearningResourceMark } from '@/types';

type Props = {
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
	formData: LearningResource;
};

const MarkTypeInput = ({ setFormData, formData }: Props) => {
	const handleMarkTypeChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const { value } = event.target;
		setFormData({
			...formData,
			mark: {
				...formData.mark,
				markType: value as LearningResourceMark['markType'],
			},
		});
	};

	return (
		<label>
			Mark Type:
			<select
				name='markType'
				onChange={handleMarkTypeChange}
				value={formData.mark.markType}
			>
				<option value='Page'>Page</option>
				<option value='Time'>Time</option>
				<option value='Lesson Number'>Lesson Number</option>
				<option value='URL'>URL</option>
				<option value='Chapter'>Chapter</option>
				<option value='Unkown'>Unkown</option>
			</select>
		</label>
	);
};

export default MarkTypeInput;
