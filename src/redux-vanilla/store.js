import { createStore } from "redux";
import { CounterReducer } from "./CounterReducer";
// creation du store

export const storeVanilla = createStore(
	CounterReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
