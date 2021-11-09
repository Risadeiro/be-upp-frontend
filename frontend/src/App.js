import './App.css';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/fpc/:fpcid'>
          <div className="App">
            <UserForm />
          </div>
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
