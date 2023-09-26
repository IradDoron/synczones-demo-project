import mockDataLearningResources from '@/data/mockDataLearningResources';
import {
	getCommaSeparatedStringsFromArray,
	getFormattedDate,
	getLearningResourceCurrentMark,
} from '@/utils';
import Link from 'next/link';

const LearningResourcesDisplay = () => {
	return (
		<>
			<h2>All Learning Resources</h2>

			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Resource URL</th>
						<th>Author</th>
						<th>Platform</th>
						<th>Platform URL</th>
						<th>Cost</th>
						<th>Currency</th>
						<th>Type</th>
						<th>Mark</th>
						<th>Last Time Learned</th>
						<th>Sub Learning Resources</th>
						<th>Status</th>
						<th>Related Tasks IDs</th>
						<th>Related Skills IDs</th>
					</tr>
				</thead>
				<tbody>
					{mockDataLearningResources.map((learningResource) => {
						const {
							id,
							title,
							description,
							resourceURL,
							author,
							platform,
							platformURL,
							cost,
							currency,
							type,
							mark,
							subLearningResources,
							status,
							relatedTasksIds,
							relatedSkillsIds,
						} = learningResource;

						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>
									<Link href={resourceURL} target='blank'>
										Resource Link
									</Link>
								</td>
								<td>{author}</td>
								<td>{platform}</td>
								<td>
									<Link href={platformURL} target='blank'>
										Platform Link
									</Link>
								</td>
								<td>{cost}</td>
								<td>{currency}</td>
								<td>{type}</td>
								<td>{getLearningResourceCurrentMark(mark)}</td>
								<td>{getFormattedDate(mark.lastTimeMarked)}</td>
								<td>TODO: Add Sub Learning Resources</td>
								<td>{status}</td>
								<td>{getCommaSeparatedStringsFromArray(relatedTasksIds)}</td>
								<td>{getCommaSeparatedStringsFromArray(relatedSkillsIds)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default LearningResourcesDisplay;
