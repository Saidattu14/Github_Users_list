import React, {useEffect,useState} from 'react';
import { useFetch } from './Components/useFetch';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';
import User from './Components/userData';
import Home  from './Components/home'
const url = 'https://api.github.com/users';

const App = () => {
 
  return (
   <React.Fragment>
      <Router>
        <Switch>
         <Route  path = "/user/:name" children ={ <User></User>}>
         </Route>
        <Route exact path = '*'>
            <Home></Home>
          </Route>
        </Switch>
     </Router>
      
       
      </React.Fragment> 
      
  );
}

export default App;
