import { SkillCategory } from '@/types';
import { getCommaSeparatedStringsFromArray } from '@/utils';

type Props = {
	skillsCategories: SkillCategory[];
};

const SkillsCategoriesDisplay = ({ skillsCategories }: Props) => {
	function getKeys<T extends object>(obj: T): (keyof T)[] {
		return Object.keys(obj) as (keyof T)[];
	}

	const skillCategoryKeys = getKeys<SkillCategory>(skillsCategories[0]);

	return (
		<div>
			<h2>Skills Categories Display</h2>
			<table>
				<thead>
					<tr>
						{skillCategoryKeys.map((key) => {
							return <th key={key}>{key}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{skillsCategories?.map((skillCategory) => {
						const { id, title, description, skillsIds } = skillCategory;

						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{description}</td>
								<td>{getCommaSeparatedStringsFromArray(skillsIds)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default SkillsCategoriesDisplay;
