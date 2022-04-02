import React from 'react'
import { Route, Switch } from 'react-router-dom'

import BooksPage from './pages/BooksPage'
import CategoryPage from './pages/CategoryPage'
import Footer from './components/Footer'
import Form from './components/Form'

import Navbar from './Navbar'

const App = () => (
	<div className='main'>
		<section>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<BooksPage />
					<Form />
				</Route>
				<Route path='/categories'>
					<CategoryPage />
				</Route>
			</Switch>
		</section>
		<section>
			<Footer />
		</section>
	</div>
)

export default App
