import React from 'react';
import { useFetch } from './useFetch';

import {Link} from 'react-router-dom';
import "./home.css"
const url = 'https://api.github.com/users';


const Home = () => {
  const user_data = useFetch(url,null).data;

  return (
   
       <div className = "App1">
        <div className = "data1">
          <h1>Welcome to Github Users Data</h1>
        </div>
      { user_data.map((obj)=> {
        console.log(obj)
          const {login,id,avatar_url,url,html_url} = obj;
          return(
            
                <Link to = {`/user/${login}`}>
                    <div key = {id} className = "User_data1" >
                      <img src = {avatar_url} className = "Img1" alt = ""></img>
                      <div>
                        <div>Name : {login}</div>
                        <a href = {html_url}>Github : {html_url}</a>
                      </div> 
                    </div>
                </Link>
            
          )
        })
       }
       </div>
     
      
       
      
      
  );
}

export default Home;
