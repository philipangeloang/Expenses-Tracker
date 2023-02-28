import React from "react";
import { createContext, useReducer } from "react";

export const ItemContext = createContext();

export const itemReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return {
        items: action.payload,
      };
    case "CREATE_ITEM":
      return {
        items: [action.payload, ...state.items],
      };
    case "DELETE_ITEM":
      return {
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const ItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, {
    items: null,
  });

  console.log("Item Context state ", state);

  return (
    <ItemContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};
