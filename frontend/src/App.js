import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/fpc/:fpcid' component={UserForm}>
          <div className="App">
            <UserForm />
          </div>
        </Route>

        <Route>
          <div> Rota padrão </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;