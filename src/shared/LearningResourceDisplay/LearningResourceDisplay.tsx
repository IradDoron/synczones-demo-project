import mockDataLearningResources from '@/data/mockDataLearningResources';
import { LearningResource } from '@/types';
import {
	getCommaSeparatedStringsFromArray,
	getItemById,
	getLearningResourceCurrentMark,
} from '@/utils';
import Link from 'next/link';

type Props = {
	learningResourceId: number;
};
const LearningResourceDisplay = ({ learningResourceId }: Props) => {
	const learningResource = getItemById(
		mockDataLearningResources,
		learningResourceId
	) as LearningResource;

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
		status,
		relatedTasksIds,
		relatedSkillsIds,
	} = learningResource;

	return (
		<div>
			<h2>Learning Resources Display</h2>
			<div>
				<table>
					<thead>
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
						<th>Sub Learning Resources</th>
						<th>Status</th>
						<th>Related Tasks IDs</th>
						<th>Related Skills IDs</th>
					</thead>
					<tbody>
						<td>{id}</td>
						<td>{title}</td>
						<td>{description}</td>
						<td>
							<Link href={resourceURL}>Resource Link</Link>
						</td>
						<td>{author}</td>
						<td>{platform}</td>
						<td>
							<Link href={platformURL}>Platform Link</Link>
						</td>
						<td>{cost}</td>
						<td>{currency}</td>
						<td>{type}</td>
						<td>{getLearningResourceCurrentMark(mark)}</td>
						<td>TODO: Add Sub Learning Resources</td>
						<td>{status}</td>
						<td>{getCommaSeparatedStringsFromArray(relatedTasksIds)}</td>
						<td>{getCommaSeparatedStringsFromArray(relatedSkillsIds)}</td>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default LearningResourceDisplay;
