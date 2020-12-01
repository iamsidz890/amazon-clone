import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg'
					alt='banner'
				/>

				<div className='home__row'>
					<Product
						title={"PS5 Console white."}
						price={55000}
						image='https://cdn.gamer-network.net/2020/articles/2020-07-21-14-25/ps5_pre_order_header.jpg/EG11/thumbnail/1920x1122/format/jpg/quality/80'
						rating={4}
					/>

					{/* Product */}
					<Product
						title='Predator laptop 64GB ram '
						price={90000}
						image='https://cleverleverage.com/wp-content/uploads/2017/07/acer-predator-64-gb-badass-gaming-laptop.jpg'
						rating={5}
					/>
				</div>
				<div className='home__row'>
					<Product
						title={"Renault Duster"}
						price={980000000000}
						image='https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Duster/7704/1598257607089/front-left-side-47.jpg?tr=h-140'
						rating={3}
					/>
					<Product
						title={"German Shepherd"}
						price={21000}
						image='https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
						rating={5}
					/>
					<Product
						title='Predator laptop 64GB ram '
						price={90000}
						image='https://cleverleverage.com/wp-content/uploads/2017/07/acer-predator-64-gb-badass-gaming-laptop.jpg'
						rating={5}
					/>
				</div>
				<div className='home__row'>
					<Product
						title='LED Tv '
						price={59000}
						image='https://static.digit.in/default/1e7badacbc4188553f2d9037566ae9911b264ec5.jpeg?tr=w-1200'
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
