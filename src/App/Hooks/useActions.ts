import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCretors } from "../Redux/Index";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCretors, dispatch);
};
