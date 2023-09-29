import { Task, WorkSession } from '@/types';
import { isExistAndNotEmpty } from '@/utils';

type Props = {
	task: Task;
};

/**
 * Formats time duration in HH:MM:SS format.
 * @param {number} durationInSeconds - The duration in seconds to be formatted.
 * @returns {string} - The formatted time duration.
 */
function formatTimeDuration(durationInSeconds: number | null): string {
	if (!durationInSeconds) {
		return '';
	}
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
	if (!duration) {
		return '';
	}
	let totalWorkTime = duration;
	if (breaks && breaks.length > 0) {
		breaks.forEach((breakItem) => {
			totalWorkTime -= breakItem.duration || 0;
		});
	}
	return totalWorkTime;
};

const getTotalBreakTimeOfWorkSession = (workSession: WorkSession) => {
	const { breaks } = workSession;
	let totalBreakTime = 0;
	if (breaks && breaks.length > 0) {
		breaks.forEach((breakItem) => {
			totalBreakTime += breakItem.duration || 0;
		});
	}
	return totalBreakTime;
};

const TaskWorkSessionsDisplay = ({ task }: Props) => {
	const { workSessions } = task;

	return (
		<>
			{isExistAndNotEmpty(workSessions) && (
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
												<td>{endTime?.toString()}</td>
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
			)}
		</>
	);
};

export default TaskWorkSessionsDisplay;
