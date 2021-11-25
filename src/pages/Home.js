import { connect } from "react-redux";
import { useCallback, useEffect } from "react";
import { getArticles } from "./../redux/actions/articles";
import "./../styles/index.css";
import { Link } from "react-router-dom";
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
    <div className="container">
      <div className="jumbotron">
        <h1>
          <span className="glyphicon glyphicon-picture" aria-hidden="true" />{" "}
          Artikel
        </h1>
        <p>Daftar Artikel</p>
      </div>
      <div className="row">
        {articles.articlesData.map((item, index) => {
          return (
            <div className="column" key={index}>
              <div className="card">
                <Link to={`/article`} state={{ articleData: item }}>
                  <img width="100%" src={item.image} />
                </Link>
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
