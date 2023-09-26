import SimpleInput from '@/shared/AddLearningResourceModal/SimpleInput';
import { LearningResource } from '@/types';

type Input = {
	label: string;
	placeholder: string;
	name: string;
	type: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type Props = {
	formData: LearningResource;
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
};

const SimpleInputBlock = ({ formData, setFormData }: Props) => {
	const inputs = [
		{
			placeholder: 'Title',
			name: 'title',
			type: 'text',
		},
		{
			placeholder: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			placeholder: 'Resource URL',
			name: 'resourceURL',
			type: 'text',
		},
		{
			placeholder: 'Author',
			name: 'author',
			type: 'text',
		},
		{
			placeholder: 'Platform',
			name: 'platform',
			type: 'text',
		},
		{
			placeholder: 'Platform URL',
			name: 'platformURL',
			type: 'text',
		},
		{
			placeholder: 'Cost',
			name: 'cost',
			type: 'number',
		},
	] as Input[];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			{inputs.map((input) => {
				const { label, placeholder, name, type } = input;
				return (
					<SimpleInput
						key={name}
						label={label}
						placeholder={placeholder}
						name={name}
						type={type}
						setFormData={setFormData}
						formData={formData}
					/>
				);
			})}
		</div>
	);
};

export default SimpleInputBlock;
