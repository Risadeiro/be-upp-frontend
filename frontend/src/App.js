import "./App.css";
import UserForm from "./components/UserForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Professional from "./components/professional/Professional";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/fpc/:appointmentId">
          <div className="App">
            <UserForm />
          </div>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/doctor">
          <Professional />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
