import React from 'react';
import { useFetch } from './useFetch';
import User from './userData';
import {Link} from 'react-router-dom';
import "./home.css"
const url_data = 'https://api.github.com/users';

const Home = () => {
  const user_data = useFetch(url_data,null).data;
  return (
       <div className = "App1">
        <div className = "data1">
          <h1>Welcome to Github Users Data</h1>
        </div>
      { user_data.map((obj)=> {
          const {login,id,avatar_url,url,html_url} = obj;
         
          return(
                
                <Link to = {{
                  pathname : `/user/${login}`,
                  state : {url}
                  
                }} >
                    <div key = {id} className = "User_data1"  >
                      <img src = {avatar_url} className = "Img1" alt = ""></img>
                      <div className = "details_home">
                        <div>Name : {login}</div>
                        <a href = {html_url} onClick = {html_url}>Github : {html_url}</a>
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
