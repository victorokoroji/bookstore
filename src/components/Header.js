import React from 'react'
import Navbar from './Navbar'
import { FaUser } from 'react-icons/fa'

const Header = () => (
	<header>
		<div className='left-content'>
			<h1>Bookstore CMS</h1>
			<Navbar />
		</div>
		<div className='user'>
			<FaUser className='fa-user' />
		</div>
	</header>
)

export default Header
