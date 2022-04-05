import React from 'react'

const Navbar = () => {

	return (
		<nav>
			<div className='navBar'>
				<h1>Bookstore CMS</h1>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>BOOKS</NavLink>
						</li>
						<li>
							<NavLink to='Categories'>CATEGORY</NavLink>
						</li>
					</ul>
					<div className='icon'>.</div>
				</nav>
			</div>
		</nav>
	)
}

export default Navbar
