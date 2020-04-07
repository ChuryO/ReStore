import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/reducer';

// Middleware
const logMiddleware = ({getState}) => (next) => (action) =>{
	console.log(action.type, getState());
	return next(action);
};

// Middleware
const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action
		});
	}
	return next(action);
};


const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

const deleteActionCreator = (timeout) => (dispatch) =>{
	setTimeout(() => dispatch({
		type: 'DELETE_ACTION'
	}), timeout);
};

store.dispatch(deleteActionCreator(3000));

export default store;
