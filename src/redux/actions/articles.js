const articlesApi = [
  { id: 1, author: "George Orwell", title: "Lorem Ipsum" },
  { id: 2, author: "Douglas Adams", title: "Dolor Sit Amet" },
];

export function getArticles() {
  return {
    type: "GET_ARTICLE",
    payload: articlesApi,
  };
}

// export function getArticles(article) {
//   return {
//     type: "GET_BOOK",
//     payload: article,
//   };
// }

// export function deleteBook(book) {
//   return {
//     type: types.DELETE_BOOK,
//     payload: book,
//   };
// }
