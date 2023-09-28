import { Task } from '@/types';

type Props = {
	formData: Task;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
};

const TitleInput = ({ formData, handleChange }: Props) => {
	return (
		<section>
			<h3 className='hidden'>Title</h3>
			<details>
				<summary>Title (*)</summary>
				<input
					type='text'
					name='title'
					value={formData.title}
					onChange={handleChange}
				/>
			</details>
		</section>
	);
};

export default TitleInput;
