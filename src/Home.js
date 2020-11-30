import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images3.alphacoders.com/727/thumb-1920-72705.jpg'
					alt='banner'
				/>

				<div className='home__row'>
					<Product />
					{/* Product */}
					<Product />
				</div>
				<div className='home__row'>
					{/* Product */}
					{/* Product */}
					{/* Produvct */}
				</div>
				<div className='home__row'>{/* Product */}</div>
			</div>
		</div>
	);
}

export default Home;
