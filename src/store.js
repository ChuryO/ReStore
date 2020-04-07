import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

// Middleware
const logMiddleware = (store) => (dispatch) => (action) =>{
	console.log(action.type, store.getState());
	return dispatch(action);
};

// Middleware
const stringMiddleware = () => (dispatch) => (action) => {
	if (typeof action === 'string') {
		return dispatch({
			type: action
		});
	}
	return dispatch(action);
};

// Store Enhance
const stringEnhancer = (createStore) => (...args) => { // middleware (store) => (dispatch) => (action)
	const store = createStore(...args);             // store
	const originalDispatch = store.dispatch;
	store.dispatch = (action) => {                  // dispatch
		if (typeof action === 'string') {
			return originalDispatch({
				type: action                              // action
			});
		}
		return originalDispatch(action);
	};
	return store;
};

// Store Enhance
const logEnhancer = (createStore) => (...args) => {
	const store = createStore(...args);
	const originalDispatch = store.dispatch;
	store.dispatch = (action) => {
		console.log(action);
		return originalDispatch(action);
	};
	return store;
};

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

export default store;
