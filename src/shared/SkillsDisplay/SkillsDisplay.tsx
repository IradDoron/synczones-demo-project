import { Skill } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';

type Props = {
	skills: Skill[];
};

// export type Skill = {
// 	id: number;
// 	title: string;
// 	description: string;
// 	level: SkillLevel;
// 	inProgress: boolean;
// 	relatedSkillsIds?: number[];
// 	categoriesIds?: number[];
// 	tags?: SkillTag[];
// 	dependencies?: number[];
// };

const SkillsDisplay = ({ skills }: Props) => {
	function getKeys<T extends object>(obj: T): (keyof T)[] {
		return Object.keys(obj) as (keyof T)[];
	}

	const skillKeys = getKeys<Skill>(skills[2]);

	console.log(skillKeys);

	return (
		<div>
			<h2>Skills Display</h2>
			<table>
				<thead>
					<tr>
						{skillKeys.map((key) => {
							return <th key={key}>{key}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{skills?.map((skill) => {
						const {
							id,
							title,
							description,
							level,
							inProgress,
							categoriesIds,
							tags,
							dependencies,
							relatedSkillsIds,
						} = skill;

						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{level}</td>
								<td>{inProgress ? 'Yes' : 'No'}</td>
								<td>{getCommaSeparatedStringsFromArray(categoriesIds)}</td>
								<td>{getCommaSeparatedStringsFromArray(tags)}</td>
								<td>{getCommaSeparatedStringsFromArray(dependencies)}</td>
								<td>{getCommaSeparatedStringsFromArray(relatedSkillsIds)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default SkillsDisplay;
