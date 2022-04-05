import React from 'react'

const Navbar = () => {
	return (
		<nav className='navBar'>
				<ul>
					<li>
						<NavLink to='/' exact className={navLink => (navLink.isActie ? 'active' : 'none')}>
							BOOKS
						</NavLink>
					</li>
					<li>
						<NavLink to='Categories' className={navLink => (navLink.isActie ? 'active' : 'none')}>
							CATEGORY
						</NavLink>
					</li>
				</ul>
		</nav>
	)
}

export default Navbar
