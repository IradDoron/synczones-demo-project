import { Task, WorkSession } from '@/types';

type Props = {
	task: Task;
};

/**
 * Formats time duration in HH:MM:SS format.
 * @param {number} durationInSeconds - The duration in seconds to be formatted.
 * @returns {string} - The formatted time duration.
 */
function formatTimeDuration(durationInSeconds: number): string {
	const hours: number = Math.floor(durationInSeconds / 3600);
	const minutes: number = Math.floor((durationInSeconds % 3600) / 60);
	const seconds: number = durationInSeconds % 60;
	return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
		2,
		'0'
	)}:${String(seconds).padStart(2, '0')}`;
}

const getTotalWorkTimeOfWorkkSession = (workSession: WorkSession) => {
	const { duration, breaks } = workSession;
	let totalWorkTime = duration;
	if (breaks && breaks.length > 0) {
		breaks.forEach((breakItem) => {
			totalWorkTime -= breakItem.duration;
		});
	}
	return totalWorkTime;
};

const getTotalBreakTimeOfWorkSession = (workSession: WorkSession) => {
	const { breaks } = workSession;
	let totalBreakTime = 0;
	if (breaks && breaks.length > 0) {
		breaks.forEach((breakItem) => {
			totalBreakTime += breakItem.duration;
		});
	}
	return totalBreakTime;
};

// id: number;
// taskId: number;
// startTime: Date;
// endTime: Date;
// duration: number;
// mood?: "Very Happy" | "Happy" | "Neutral" | "Unhappy" | "Very Unhappy" | undefined;
// productivityRating?: "Very Low" | "Low" | "Medium" | "High" | "Very High" | undefined;
// notes?: string | undefined;
// breaks?: Break[] | undefined;

// export type Break = {
// 	startTime: Date;
// 	endTime: Date;
// 	duration: number;
// 	reason?: string;
// 	activity?: string;
// };

const TaskWorkSessionsDisplay = ({ task }: Props) => {
	const { workSessions } = task;

	return (
		<>
			<h2>Work Sessions</h2>
			{workSessions && workSessions.length > 0 ? (
				<div>
					<table>
						<thead>
							<tr>
								<th>Work Session ID</th>
								<th>Task ID</th>
								<th>Start Time</th>
								<th>End Time</th>
								<th>Duration</th>
								<th>Mood</th>
								<th>Productivity Rating</th>
								<th>Notes</th>
							</tr>
						</thead>
						<tbody>
							{workSessions.map((session) => {
								const {
									id,
									taskId,
									startTime,
									endTime,
									duration,
									mood,
									productivityRating,
									notes,
								} = session;

								return (
									<tr key={id}>
										<td>{id}</td>
										<td>{taskId}</td>
										<td>{startTime.toString()}</td>
										<td>{endTime.toString()}</td>
										<td>{formatTimeDuration(duration)}</td>
										<td>{mood}</td>
										<td>{productivityRating}</td>
										<td>{notes}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				<p>No work sessions available.</p>
			)}
		</>
	);
};

export default TaskWorkSessionsDisplay;
