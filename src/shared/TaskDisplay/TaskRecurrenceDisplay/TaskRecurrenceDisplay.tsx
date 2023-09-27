import { Task } from '@/types';

type Props = {
	task: Task;
};

const TaskRecurrenceDisplay = ({ task }: Props) => {
	const { recurrence } = task;
	return (
		<>
			<h2>Recurrence</h2>
			{recurrence && (
				<div>
					{(() => {
						switch (recurrence.type) {
							case 'none':
								return <p>No recurrence</p>;
							case 'daily':
								return (
									<p>
										Recurs daily, every {recurrence.interval} day(s) at{' '}
										{recurrence.time}
									</p>
								);
							case 'weekly':
								return (
									<p>
										Recurs weekly on the following days:
										<ul>
											{recurrence.days.map((day, index) => (
												<li key={index}>
													{day.dayOfWeek} at {day.time}
												</li>
											))}
										</ul>
									</p>
								);
							case 'monthly':
								return (
									<p>
										Recurs monthly on the following days of the month:
										<ul>
											{recurrence.daysOfMonth.map((day, index) => (
												<li key={index}>
													{day.dayOfMonth}th day at {day.time}
												</li>
											))}
										</ul>
									</p>
								);
							case 'yearly':
								return (
									<p>
										Recurs yearly on the following months and days:
										<ul>
											{recurrence.months.map((month, index) => (
												<li key={index}>
													{month.month}, {month.dayOfMonth}th day at{' '}
													{month.time}
												</li>
											))}
										</ul>
									</p>
								);
							default:
								return null;
						}
					})()}
				</div>
			)}
		</>
	);
};

export default TaskRecurrenceDisplay;
