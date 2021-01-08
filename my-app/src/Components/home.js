import React, {useEffect,useState} from 'react';
import { useFetch } from './useFetch';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./home.css"
const url = 'https://api.github.com/users';


const Home = () => {
  const user_data = useFetch(url).data;
  const [data, setData] = useState(true);
  const handler = (url,id) =>  {
  setData(false)
     
   
  }
  return (
   
       <div className = "App1">
        <div className = "data1">
          <h1>Welcome to Github Users Data</h1>
        </div>
      { data &&  user_data.map((obj)=> {
          const {login,id,avatar_url,url} = obj;
          return(
            
                <Link to = "/user">
                    <div key = {id} className = "User_data1" >
                      <img src = {avatar_url} className = "Img1"></img>
                      <div className = "Name1">{login}</div>  
                    </div>
                </Link>
            
          )
        })
       }
       </div>
     
      
       
      
      
  );
}

export default Home;
