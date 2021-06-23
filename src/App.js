import React from "react";
import { Provider } from "react-redux";
import { Counter as CounterReduxToolkit } from "./redux-toolkit/components/Counter";
import { Counter as CounterReduxVanilla } from "./redux-vanilla/components/Counter";
import { store } from "./redux-toolkit/store";
import { storeVanilla } from "./redux-vanilla/store";
import "./App.css";

function App() {
	return (
		<>
			<div className="App">
				<Provider store={storeVanilla}>
					<CounterReduxVanilla />
				</Provider>
				<hr />
				<Provider store={store}>
					<CounterReduxToolkit />
				</Provider>
			</div>
		</>
	);
}

export default App;
