import { connect } from "react-redux";
import { useCallback, useEffect } from "react";
import { getArticles } from "./../redux/actions/articles";
import "./../styles/index.css";
// eslint-disable-next-line react-hooks/exhaustive-deps
function Home({ articles, dispatch }) {
  console.log(articles.articlesData);

  const fetchArticles = useCallback(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <div>
      <h2>Article List</h2>
      <p>This is article list.</p>
      <div className="row">
        {articles.articlesData.map((item, index) => {
          return (
            <div className="column" key={index}>
              <div className="card">
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <p>{item.description.slice(0, 100)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(Home);
