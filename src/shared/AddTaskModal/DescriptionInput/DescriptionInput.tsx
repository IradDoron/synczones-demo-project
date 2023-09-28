import { Task } from '@/types';

type Props = {
	formData: Task;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
};

const DescriptionInput = ({ formData, handleChange }: Props) => {
	return (
		<section>
			<h3 className='hidden'>Description</h3>
			<details>
				<summary>Description</summary>
				<input
					type='text'
					name='description'
					value={formData.description}
					onChange={handleChange}
				/>
			</details>
		</section>
	);
};

export default DescriptionInput;
