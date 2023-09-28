import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div>
				<Link href='/'>Home</Link>
				<div className='dropdown'>
					<button className='dropbtn'>
						Managers
						<i className='fa fa-caret-down'></i>
					</button>
					<div className='dropdown-content'>
						<Link href='/tasks-manager'>Tasks Manager</Link>
						<Link href='/career-manager'>Career Manager</Link>
						<Link href='/collaboration-manager'>Collaboration Manager</Link>
						<Link href='/finance-manager'>Finance Manager</Link>
						<Link href='/goals-manager'>Goals Manager</Link>
						<Link href='/health-manager'>Health Manager</Link>
						<Link href='/hobbies-manager'>Hobbies Manager</Link>
						<Link href='/learning-manager'>Learning Manager</Link>
						<Link href='/organization-manager'>Organization Manager</Link>
						<Link href='/projects-manager'>Projects Manager</Link>
						<Link href='/relationships-manager'>Relationships Manager</Link>
						<Link href='/routine-manager'>Routine Manager</Link>
						<Link href='/skills-manager'>Skills Manager</Link>
						<Link href='/time-manager'>Time Manager</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
