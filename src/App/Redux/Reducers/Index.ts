import { combineReducers } from "redux";
import RepoReducer from "./Reposetories";

const reducers = combineReducers({
  reposirories: RepoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
