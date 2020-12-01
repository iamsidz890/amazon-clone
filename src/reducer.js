export const initialState = {
	basket: [],
};
// how we are going to push to the store or data layer..push data to the store

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
		// default state
		default:
			return state;
	}
};

export default reducer;
