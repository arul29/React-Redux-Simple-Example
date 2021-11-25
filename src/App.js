import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import RoutesContainer from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
