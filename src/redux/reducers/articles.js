const initialArticles = [];

const articles = (prevState = initialArticles, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      return { articlesData: action.payload.data };

    case "SEARCH_ARTICLE":
      let updateSearch = action.payload.data;
      updateSearch = updateSearch.filter(function (item) {
        return (
          item.title
            .toLowerCase()
            .search(action.payload.keyword.toLowerCase()) !== -1
        );
      });
      return { articlesData: updateSearch };

    default:
      return { articlesData: prevState };
  }
};

export default articles;
