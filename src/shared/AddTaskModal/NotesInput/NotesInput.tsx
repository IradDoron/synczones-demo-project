import { Task } from '@/types';

type Props = {
	formData: Task;
	setFormData: React.Dispatch<React.SetStateAction<Task>>;
};

const NotesInput = ({ formData, setFormData }: Props) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const notes = e.target.value;
		setFormData({
			...formData,
			notes,
		});
	};

	return (
		<section>
			<h3 className='hidden'>Notes</h3>
			<details>
				<summary>Notes</summary>
				<label>
					<textarea
						name='notes'
						value={formData.notes}
						onChange={handleChange}
					/>
				</label>
			</details>
		</section>
	);
};

export default NotesInput;
