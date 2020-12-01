export const initialState = {
	basket: [],
};
// how we are going to push to the store or data layer..push data to the store

///////////////////////Selector//////////////////////////
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	// action is what we wanna do add or remove
	switch (action.type) {
		case "ADD_TO_BASKET":
			// when we receive this action......it will dispach this action....reducer is alawasy listening
			return {
				// original state
				...state,
				basket: [...state.basket, action.item],
				// old + what we added
			};
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn("Can't remove product....");
			}

			return {
				...state,
				basket: newBasket,
			};
		// default state
		default:
			return state;
	}
};

export default reducer;
