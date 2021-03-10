import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Redux/Index";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
