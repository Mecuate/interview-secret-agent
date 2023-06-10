import { useState } from "react";

import "./styles/App.css";
import { Counter } from "./Counter";
import { Prueba1 } from "./P1";
import { Prueba2 } from "./P2";

enum Screen {
	COUNTER = "COUNTER",
	P1 = "P1",
	P2 = "P2",
}

function App() {
	const [testScreen, setTestScreen] = useState(Screen.COUNTER);

	return (
		<div className="screen">
			{testScreen === Screen.COUNTER && <Counter />}
			{testScreen === Screen.P1 && (
				<span className="cardStyle">
					<Prueba1 />
				</span>
			)}
			{testScreen === Screen.P2 && (
				<span className="cardStyle">
					<Prueba2 />
				</span>
			)}
			<div className="bottomNav">
				<div>
					<button onClick={() => setTestScreen(Screen.COUNTER)}>Counter</button>
					<button onClick={() => setTestScreen(Screen.P1)}>Prueba 1</button>
					<button onClick={() => setTestScreen(Screen.P2)}>Prueba 2</button>
				</div>
			</div>
		</div>
	);
}

export default App;
