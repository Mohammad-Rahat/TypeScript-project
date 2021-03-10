import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import RepositoriesList from "./Components/List";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Search for package</h1>
          <RepositoriesList />
        </div>
      </Provider>
    </>
  );
};

export default App;
