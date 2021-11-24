const articlesData = [];

const articles = (prevState = articlesData, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      const newArticle = action.payload;
      const newState = articlesData.push(newArticle);
      return { articlesData: newState };

    default:
      return prevState;
  }
};

export default articles;
