type Props = {
	handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CurrencyInput = ({ handleChange }: Props) => {
	return (
		<label>
			Currency:
			<select name='currency' onChange={handleChange}>
				<option value='ILS'>ILS</option>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
			</select>
		</label>
	);
};

export default CurrencyInput;
