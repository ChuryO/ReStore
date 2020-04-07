import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

// Middleware
const logMiddleware = ({getState, dispatch}) => (next) => (action) =>{ // (only 2 func from store) => ( next === dispatch )
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


const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

export default store;
