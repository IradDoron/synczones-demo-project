import Link from 'next/link';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/career-manager'>Career Manager</Link>
				</li>
				<li>
					<Link href='/collaboration-manager'>Collaboration Manager</Link>
				</li>
				<li>
					<Link href='/finance-manager'>Finance Manager</Link>
				</li>
				<li>
					<Link href='/goals-manager'>Goals Manager</Link>
				</li>
				<li>
					<Link href='/health-manager'>Health Manager</Link>
				</li>
				<li>
					<Link href='/hobbies-manager'>Hobbies Manager</Link>
				</li>
				<li>
					<Link href='/learning-manager'>Learning Manager</Link>
				</li>
				<li>
					<Link href='/organization-manager'>Organization Manager</Link>
				</li>
				<li>
					<Link href='/projects-manager'>Projects Manager</Link>
				</li>
				<li>
					<Link href='/relationships-manager'>Relationships Manager</Link>
				</li>
				<li>
					<Link href='/routine-manager'>Routine Manager</Link>
				</li>
				<li>
					<Link href='/skills-manager'>Skills Manager</Link>
				</li>
				<li>
					<Link href='/tasks-manager'>Tasks Manager</Link>
				</li>
				<li>
					<Link href='/time-manager'>Time Manager</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
