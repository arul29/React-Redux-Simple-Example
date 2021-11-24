import logo from "./../logo.svg";
import "./../App.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "./../redux/actions/articles";

function Home({ articles, dispatch }) {
  console.log(articles);

  useEffect(async () => {
    await dispatch(getArticles());
    console.log("AFTER DISPATCH", articles);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(Home);
