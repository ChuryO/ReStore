import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './style.css';

import { CartPage, HomePage } from '../pages';
import Header from '../header';

const App = () => {
	return (
		<main role='main' className='container'>
			<Header numItems={3} total={136}/>
			<Switch>
				<Route path='/' component={ HomePage } exact/>
				<Route path='/cart/' component={ CartPage }/>
				<Route render={() => <h3>Page not found</h3>}/>
			</Switch>
		</main>
	);
};

export default App;
