import { articlesApi } from "../../database";

const articlesData = articlesApi;

export function getArticles() {
  return {
    type: "GET_ARTICLE",
    payload: { data: articlesData },
  };
}

export function searchArticles(keyword) {
  return {
    type: "SEARCH_ARTICLE",
    payload: { keyword: keyword, data: articlesData },
  };
}
