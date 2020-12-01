// Capitalize components..

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { ShoppingBasket } from "@material-ui/icons";

function Header() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg'
				/>
			</Link>

			<div className='header__search'>
				<input className='header__searchInput' type='text' />
				<SearchIcon className='header__searchIcon' />
			</div>

			<div className='header__nav'>
				<div className='header__option'>
					<span className='header__optionLineOne'>Hello Sid</span>
					<span className='header__optionLineTwo'>SignIn</span>
				</div>

				<div className='header__option'>
					<span className='header__optionLineOne'>Return</span>
					<span className='header__optionLineTwo'>& Orders</span>
				</div>

				<div className='header__option'>
					<span className='header__optionLineOne'>Your</span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingCartIcon />
						<span className='header__optionLineTwo header__basketCount'>
							{basket?.length}
							{/* ?(Optional chaining)is for handling error in case basket is not recognised */}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
