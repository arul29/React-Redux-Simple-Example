import { articlesApi } from "../../databases";

export function getArticles() {
  return {
    type: "GET_ARTICLE",
    payload: articlesApi,
  };
}
