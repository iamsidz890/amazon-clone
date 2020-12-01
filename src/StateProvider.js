import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer..........or the store
export const StateContext = createContext();

// wrap the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// pull information from the layer and provide....wrap the app with the state provider
export const useStateValue = () => useContext(StateContext);
