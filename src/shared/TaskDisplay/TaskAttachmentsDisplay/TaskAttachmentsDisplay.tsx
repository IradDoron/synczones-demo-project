import { Task } from '@/types';
import { isExistAndNotEmpty } from '@/utils';

type Props = {
	task: Task;
};

const isAttachmentsHasNotes = (attachments: Task['attachments']) => {
	return attachments.some((attachment) => isExistAndNotEmpty(attachment.notes));
};

const TaskAttachmentsDisplay = ({ task }: Props) => {
	const { attachments } = task;

	return (
		<>
			{isExistAndNotEmpty(attachments) && (
				<>
					<h2>Attachments</h2>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>URL</th>
								{isAttachmentsHasNotes(attachments) && <th>Notes</th>}
							</tr>
						</thead>
						<tbody>
							{attachments?.map((attachment) => (
								<tr key={attachment.id}>
									<td>{attachment.id}</td>
									<td>{attachment.title}</td>
									<td>{attachment.url}</td>
									{isAttachmentsHasNotes(attachments) && (
										<td>{attachment.notes}</td>
									)}
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</>
	);
};

export default TaskAttachmentsDisplay;
