import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './bootstrap.min.css';
import './style.css';
import {CartPage, HomePage} from '../pages';

const App = () => {
    return (
        <div className='container'>
            <h2>Hello From Header!!</h2>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart/' component={CartPage}/>
                {/*<Route render={() => <h3>Page not found</h3>}/>*/}
            </Switch>
        </div>
    );
};

export default App;
