// import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import React, { useState } from "react";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signIn = (e) => {
		e.preventDefault();
		// prevents refreshing.....

		// fancy firebase login stuff
	};
	const register = (e) => {
		e.preventDefault();
		// fancy firebase register shttt
	};
	return (
		<div className='login'>
			<Link to='/'>
				<img
					src='https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg'
					className='login__logo'
				/>
			</Link>
			<div className='login__container'>
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						onClick={signIn}
						type='submit'
						className='login__signInButton'>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to this store's condition of use and sale.
					Please see our privacy notice, our cookies notice and our Intrest
					based Ads.
				</p>
				<button onClick={register} className='login__registerButton'>
					Create your Account.
				</button>
			</div>
		</div>
	);
}

export default Login;
