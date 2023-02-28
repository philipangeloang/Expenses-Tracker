import { ItemContext } from "../context/ItemContext";
import { useContext } from "react";

export const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw Error("Must be inside the ItemContextProvider");
  }

  return context;
};
