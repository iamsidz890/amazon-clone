import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product() {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>Name of prod</p>
				<p className='product__price'>
					<small>$</small>
					<strong>200</strong>
				</p>
				<div className='product__rating'>
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</div>
				<img src='https://cdn.gamer-network.net/2020/articles/2020-07-21-14-25/ps5_pre_order_header.jpg/EG11/thumbnail/1920x1122/format/jpg/quality/80' />

				<button>Add to Basket</button>
			</div>
		</div>
	);
}

export default Product;
