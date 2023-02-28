import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be inside the provider");
  }

  // destructure the user from this context and also dispatch to perform different state change
  return context;
};
