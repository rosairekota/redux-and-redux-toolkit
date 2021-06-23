import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../CounterReducer";

export function Counter() {
	const count = useSelector((state) => state.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Compteur Avec Redux Pure</h1>
			<div className="container">
				<button
					className="btn btn-secondary"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span className="value">{count}</span>
				<button
					className="btn btn-danger"
					onClick={() => dispatch(increment())}
				>
					+
				</button>
			</div>
		</div>
	);
}
