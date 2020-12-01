import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
	useEffect(() => {
		// will only run once the app componnet runs with []
		// listener to check who is here ... always listening
		auth.onAuthStateChanged((authUser) => {
			console.log("user is", authUser);
			if (authUser) {
				// the user just logged in
			} else {
				// /////logged out
			}
		});
	}, []);
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
