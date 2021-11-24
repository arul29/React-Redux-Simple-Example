import { combineReducers } from "redux";

import articles from "./articles";

const appReducer = combineReducers({
  articles, // articles: articles // reducerName: importName
});

export default appReducer;
