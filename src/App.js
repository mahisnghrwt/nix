import './App.css';
import { useState } from 'react';

const getData = async () => {
	const url = "https://124.169.41.126:7777/api/users"
	const data = await fetch(url, {
		mode: "cors",
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});

	return data;
}

function App() {
	const [state, setState] = useState([]);

	const fetchClickHandler = async e => {
		const data = await getData();
		setState(data);
	}
	
	return (
		<div className="App">
			<h1>Hello</h1>
			<button onClick={fetchClickHandler}>Fetch</button>
			<ol>
				{state.map(x => {
					return <li>{x}</li>
				})}
			</ol>
		</div>
	);
}

export default App;
