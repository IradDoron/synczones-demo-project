import { LearningResource } from '@/types';

type Props = {
	label?: string;
	placeholder: string;
	name: string;
	type: string;
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
	formData: LearningResource;
};

const SimpleInput = ({
	label,
	placeholder,
	name,
	type,
	setFormData,
	formData,
}: Props) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		} as Pick<LearningResource, keyof LearningResource>);
	};

	return (
		<label>
			{label ? label : `Add the ${placeholder}`}:{' '}
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
			/>
		</label>
	);
};

export default SimpleInput;
