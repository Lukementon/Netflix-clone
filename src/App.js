import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./firebase";
import { login, logout } from "./actions/userAction";
import ProfileScreen from "./pages/ProfileScreen";

const App = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(login(userAuth));
      } else {
        // Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path={["/movie/:id", "/"]}>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
