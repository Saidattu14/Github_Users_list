import React, {useEffect,useState} from 'react';
import { useFetch } from './Components/useFetch';
import './App.css';
const url = 'https://api.github.com/users';

const App = () => {
  const user_data = useFetch(url).data;
  
 
 
  return (
   <React.Fragment>
     <div className = "App">
      <div className = "data">
         <h1>Welcome to Github Users Data</h1>
      </div>
      
      {
        
        user_data.map((obj)=> {
          const {login,id,avatar_url} = obj;
          return(
            <div key = {id} className = "User_data">
              <img src = {avatar_url} className = "Img"></img>
              <div className = "Name">{login}</div>  
            </div>
          )
        })
      }
     </div>
   </React.Fragment>
  );
}

export default App;
