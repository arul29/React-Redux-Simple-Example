import { useLocation } from "react-router";
export default function Article() {
  const location = useLocation();
  const { articleData } = location.state;
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>{articleData.title}</h1>
        <p>{articleData.author}</p>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-8">
            <img
              width="50%"
              className="mx-auto d-block"
              src={articleData.image}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-8">
            <p>{articleData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
