import { Task } from '@/types';

type Props = {
	formData: Task;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
};

const LearningResourceIdInput = ({ formData, handleChange }: Props) => {
	return (
		<section>
			<h3 className='hidden'>Learning Resource ID</h3>
			<details>
				<summary>Learning Resource ID</summary>
				<input
					type='text'
					name='learningResourceId'
					value={formData.learningResourceId || ''}
					onChange={handleChange}
				/>
			</details>
		</section>
	);
};

export default LearningResourceIdInput;
