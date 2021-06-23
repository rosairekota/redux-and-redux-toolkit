import { createStore } from "redux";
const initialState = {
	value: 0,
};

// types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, value: state.value + 1 };
		case DECREMENT:
			return { ...state, value: state.value - 1 };
		default:
			return state;
	}
};

// creations des actions creators

export const increment = () => {
	return { type: INCREMENT };
};
export const decrement = () => {
	return { type: DECREMENT };
};

// export const storeVanilla = createStore(
// 	CounterReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// storeVanilla.subscribe(() => {
// 	console.log(storeVanilla.getState());
// });
// storeVanilla.dispatch({ type: INCREMENT, payload: { value: 1 } });
// storeVanilla.dispatch({ type: INCREMENT, payload: { value: 2 } });

//export const selectCount = (state) => state.value;
// creation du store
