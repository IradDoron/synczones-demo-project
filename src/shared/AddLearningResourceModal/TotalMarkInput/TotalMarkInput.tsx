import { LearningResource, LearningResourceMark } from '@/types';
import { useState } from 'react';

type Props = {
	setFormData: React.Dispatch<React.SetStateAction<LearningResource>>;
	formData: LearningResource;
	marktype: LearningResourceMark['markType'];
};
const TotalMarkInput = ({ setFormData, formData, marktype }: Props) => {
	const [seconds, setSeconds] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);
	const [hours, setHours] = useState<number>(0);
	const [number, setNumber] = useState<number>(0);
	const [text, setText] = useState<string>('');

	const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSeconds(parseInt(value));
		setFormData({
			...formData,
			mark: {
				...formData.mark,
				totalMark: getSeconds(),
			},
		});
	};

	const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setMinutes(parseInt(value));
		setFormData({
			...formData,
			mark: {
				...formData.mark,
				totalMark: getSeconds(),
			},
		});
	};

	const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setHours(parseInt(value));
		setFormData({
			...formData,
			mark: {
				...formData.mark,
				totalMark: getSeconds(),
			},
		});
	};

	const getSeconds = () => {
		return seconds + minutes * 60 + hours * 60 * 60;
	};

	const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setNumber(parseInt(value));
		setFormData({
			...formData,
			mark: {
				...formData.mark,
				totalMark: number,
			},
		});
	};

	const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setText(value);
		setFormData({
			...formData,
			mark: {
				...formData.mark,
				totalMark: value,
			},
		});
	};

	const getMarkTypeFormated = (marktype: LearningResourceMark['markType']) => {
		switch (marktype) {
			case 'Page':
				return 'number';
			case 'Time':
				return 'time';
			case 'Lesson Number':
				return 'number';
			case 'URL':
				return 'text';
			case 'Chapter':
				return 'text';
			case 'Unkown':
				return 'text';
			default:
				return 'text';
		}
	};

	switch (getMarkTypeFormated(marktype)) {
		case 'time': {
			return (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<label>Total Mark (time):</label>

					<label>
						Seconds:{' '}
						<input
							type='number'
							name='seconds'
							onChange={handleSecondsChange}
							value={seconds}
						/>
					</label>
					<label>
						Minutes:{' '}
						<input
							type='number'
							name='minutes'
							onChange={handleMinutesChange}
							value={minutes}
						/>
					</label>
					<label>
						Hours:{' '}
						<input
							type='number'
							name='hours'
							onChange={handleHoursChange}
							value={hours}
						/>
					</label>
				</div>
			);
		}

		case 'number':
			return (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<label>
						Total Mark (number):{' '}
						<input
							type='number'
							name='totalMark'
							onChange={handleNumberChange}
							value={number}
						/>
					</label>
				</div>
			);
		case 'text':
			return (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<label>
						Total Mark (text):{' '}
						<input
							type='text'
							name='totalMark'
							onChange={handleTextChange}
							value={text}
						/>
					</label>
				</div>
			);
		default:
			return <input type='text' name='totalMark' onChange={handleTextChange} />;
	}
};

export default TotalMarkInput;
