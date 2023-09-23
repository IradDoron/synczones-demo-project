import mockDataVisions from '@/data/mockDataVisions';
import { titleCaseToKebabCase } from '@/utils';
import Link from 'next/link';

type Props = {
	children: React.ReactNode;
};

const VisionLaddersLayout = ({ children }: Props) => {
	const visionsTitlesArray = mockDataVisions.map((vision) => {
		return vision.title;
	});
	return (
		<div>
			<h1>Visions Ladders Page</h1>
			<nav>
				<ul>
					<li>
						<Link href='/goals-manager/visions-ladders'>
							All Visions Ladders
						</Link>
					</li>
					{visionsTitlesArray.map((title) => {
						return (
							<li key={title}>
								<Link
									href={`/goals-manager/visions-ladders/${titleCaseToKebabCase(
										title
									)}`}
								>
									{title}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			{children}
		</div>
	);
};

export default VisionLaddersLayout;
