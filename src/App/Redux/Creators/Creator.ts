import Axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../Types/Types";
import { Action } from "../Actions/Actions";

export const searchRepo = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    });

    await Axios.get("https://registry.npmjs.org/-/v1/search", {
      params: {
        text: term,
      },
    })
      .then((res) => {
        const names = res.data.objects.map((result: any) => {
          return result.package.name;
        });
        dispatch({
          type: ActionType.SEARCH_REPO_SUCCESS,
          payload: names,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.SEARCH_REPO_ERROR,
          payload: err.message,
        });
      });
  };
};
