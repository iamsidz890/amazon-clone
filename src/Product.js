import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
	// this is coming from the state provider
	const [state, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			// dispatch the item  to data layer or store
			// like a gun....shoot into data layer
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon />
						))}
				</div>
			</div>
			<img className='product__image' src={image} />
			<button className='product__button' onClick={addToBasket}>
				Add to Basket
			</button>
		</div>
	);
}

export default Product;
