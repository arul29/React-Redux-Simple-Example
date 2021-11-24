const initialState = {
  articlesData: [],
};

const articles = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      const newState = {
        ...prevState,
        articlesData: action.payload,
      };
      return newState;

    default:
      return prevState;
  }
};

export default articles;
