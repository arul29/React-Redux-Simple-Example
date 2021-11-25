import { connect } from "react-redux";
import { useCallback, useEffect } from "react";
import { getArticles, searchArticles } from "./../redux/actions/articles";
import { Link } from "react-router-dom";
import "./../styles/index.css";
// eslint-disable-next-line react-hooks/exhaustive-deps
function Home({ articles, dispatch }) {
  const { articlesData } = articles;

  const fetchArticles = useCallback(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const handleSearchArticles = useCallback(
    (keyword) => {
      console.log(keyword);
      dispatch(searchArticles(keyword));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>
          <span className="glyphicon glyphicon-picture" aria-hidden="true" />{" "}
          Article
        </h1>
        {/* <p>Daftar Artikel</p> */}
        <div className="form">
          <label>Search Article</label>
          <input
            onChange={(e) => handleSearchArticles(e.target.value)}
            type="text"
            placeholder="Insert keyword"
            className="form-control"
            id="usr"
          />
        </div>
      </div>
      <div className="row">
        {articlesData.map((item, index) => {
          return (
            <div className="column" key={index}>
              <div className="card">
                <Link to={`/article`} state={{ articleData: item }}>
                  <img alt="cover" width="100%" src={item.image} />
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
