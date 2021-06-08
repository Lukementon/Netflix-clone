import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import HomeScreen from "./pages/HomeScreen";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <HomeScreen />
      </div>
    </Provider>
  );
};

export default App;
