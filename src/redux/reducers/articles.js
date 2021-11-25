const initialArticles = [];

const articles = (prevState = initialArticles, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      console.log("ACTION PAYLOAD", action.payload);
      const articlesData = action.payload;
      return articlesData;

    case "SEARCH_ARTICLE":
      let updatedList = action.payload.data;
      updatedList = updatedList.filter(function (item) {
        return (
          item.title
            .toLowerCase()
            .search(action.payload.keyword.toLowerCase()) !== -1
        );
      });
      return updatedList;

    default:
      return prevState;
  }
};

export default articles;
