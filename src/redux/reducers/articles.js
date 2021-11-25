const initialArticles = [];

const articles = (prevState = initialArticles, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      return action.payload;

    case "SEARCH_ARTICLE":
      let updateSearch = action.payload.data;
      updateSearch = updateSearch.filter(function (item) {
        return (
          item.title
            .toLowerCase()
            .search(action.payload.keyword.toLowerCase()) !== -1
        );
      });
      return updateSearch;

    default:
      return prevState;
  }
};

export default articles;
