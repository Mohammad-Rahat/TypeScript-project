import { ActionType } from "../Types/Types";

interface Search {
  type: ActionType.SEARCH_REPO;
  payload?: string;
}

interface SearchSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action = Search | SearchSuccess | SearchError;
