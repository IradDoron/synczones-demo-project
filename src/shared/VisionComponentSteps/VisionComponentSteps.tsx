import mockDataGoals from '@/data/mockDataGoals';
import { VisionLadderStep } from '@/types';
import { getCommaSeparatedStringsFromArray, getItemById } from '@/utils';
import Link from 'next/link';

type Props = {
	steps: VisionLadderStep[];
};

const VisionComponentSteps = ({ steps }: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Step</th>
					<th>Title</th>
					<th>Description</th>
					<th>Goals IDs</th>
					<th>Goals</th>
				</tr>
			</thead>
			<tbody>
				{steps.map((step, index) => {
					const { title, description, goalIds } = step;
					return (
						<tr key={title}>
							<td>{steps.length - index}</td>
							<td>{title}</td>
							<td>{description}</td>
							<td>{getCommaSeparatedStringsFromArray(goalIds)}</td>
							<td>
								<ul
									style={{
										paddingLeft: '2rem',
									}}
								>
									{goalIds.map((goalId) => {
										const goal = getItemById(mockDataGoals, goalId);
										const { url, title } = goal;
										return (
											<li key={goalId}>
												<Link href={`/goals-manager/goals/${url}`}>
													{title}
												</Link>
											</li>
										);
									})}
								</ul>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default VisionComponentSteps;
