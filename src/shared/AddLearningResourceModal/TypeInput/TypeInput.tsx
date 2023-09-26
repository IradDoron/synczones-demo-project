type Props = {
	handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TypeInput = ({ handleChange }: Props) => {
	return (
		<label>
			Type:
			<select name='type' onChange={handleChange}>
				<option value='Course'>Course</option>
				<option value='Module'>Module</option>
				<option value='Book'>Book</option>
				<option value='Video'>Video</option>
				<option value='Article'>Article</option>
				<option value='Podcast'>Podcast</option>
				<option value='Private Lesson'>Private Lesson</option>
				<option value='Technology'>Technology</option>
				<option value='Other'>Other</option>
			</select>
		</label>
	);
};

export default TypeInput;
