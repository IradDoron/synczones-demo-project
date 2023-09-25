import { GoalProcess } from '@/types';

type Props = {
	goalProcess: GoalProcess | undefined;
};

const GoalProcessDisplay = ({ goalProcess }: Props) => {
	if (!goalProcess) {
		return <div>Add a goal process</div>;
	}

	const { sections } = goalProcess;

	return (
		<div>
			{sections.map((section) => {
				const { element, content } = section;

				switch (element) {
					case 'paragraph': {
						return <p key={element}>{content}</p>;
					}
					default: {
						return null;
					}
				}
			})}
		</div>
	);
};

export default GoalProcessDisplay;
