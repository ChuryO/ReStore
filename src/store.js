import { createStore, compose } from 'redux';
import reducer from './reducers/reducer';



// Store Enhance
const stringEnhancer = (createStore) => (...args) => {
	const store = createStore(...args);
	const originalDispatch = store.dispatch;
	store.dispatch = (action) => {
		if (typeof action === 'string') {
			return originalDispatch({
				type: action
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

// // Monkey patching
// const originalDispatch = store.dispatch;
// store.dispatch = (action) =>{
// 	if (typeof action === 'string'){
// 		return originalDispatch({
// 			type: action
// 		})
// 	}
// 	return originalDispatch(action)
// };

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

store.dispatch('HELLO_WORLD');

export default store;
