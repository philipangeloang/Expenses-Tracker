import { useAuthContext } from "./useAuthContext";
import { useItemContext } from "./useItemContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: itemsDispatch } = useItemContext();

  const logout = () => {
    // delete web token and update global state means logging out

    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    itemsDispatch({ type: "SET_ITEM", payload: null });
  };

  return { logout };
};
