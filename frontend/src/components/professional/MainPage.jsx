import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from './MainPage.module.css';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Appointment from './appointment/Appointment'

const MainPage = () => {
  const [toggleState, setToggleState] = useState(false)
  const [bodyClass, setBodyClass] = useState(`${styles.body}`)

  const toggleMenu = () => {
    const myToggleState = !toggleState
    
    if (myToggleState)
      setBodyClass(bodyClass + ` ${styles.bodyPd}`)
    else
      setBodyClass(`${styles.body}`)

    setToggleState(myToggleState)
  }

  return (
    <Router>
      <div className={bodyClass}>
        <Header 
          onClick={toggleMenu}
          toggleState={toggleState} 
          />

        <Sidebar
          toggleState={toggleState}
          />

        <Switch>
          <Route exact path="/doctor/appointment">
            <Appointment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default MainPage;