import { connect } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "./../redux/actions/articles";
import "./../styles/index.css";

function Home({ articles, dispatch }) {
  console.log(articles);

  useEffect(() => {
    async function fetchData() {
      await dispatch(getArticles());
      console.log("AFTER DISPATCH", articles.articlesData);
    }
    fetchData();
  }, [articles.articlesData]);

  return (
    <div>
      <h2>Article List</h2>
      <p>This is article list.</p>
      <div className="row">
        {articles.articlesData.map((item, index) => {
          return (
            <div className="column">
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
