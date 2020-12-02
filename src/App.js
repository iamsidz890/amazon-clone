import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();
	///////////////////////////////////////////firebase auth 4//////////////
	useEffect(() => {
		// will only run once the app component loads with  []...............
		// listener to check who is here ... always listening
		auth.onAuthStateChanged((authUser) => {
			// listener from firebase ..as app loads attach this listener
			console.log("user is", authUser);
			if (authUser) {
				// the user just logged in or the user was logged in..
				dispatch({
					type: "SET_USER",
					// shoot the user to data layer or store
					user: authUser,
				});
			} else {
				///////logged out////////////
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	///////////////////////////end 4/////////////////////////////
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
