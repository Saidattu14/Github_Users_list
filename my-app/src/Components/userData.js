import React, {useEffect,useState} from 'react';
import {useParams} from "react-router-dom"
import { useFetch } from './useFetch';
import './user_data.css'
const url = 'https://api.github.com/users';
function User () {
  const {login} = useParams();
  const ur = 'https://api.github.com/users';
  const user_data = useFetch(ur,login).data;
  const {url} = (user_data)
  // const [val,setPerson] = useState([]);
  // const [followers, setFollowers] = useState([]);
  const val = useFetch(url,null).data;
  const followers = useFetch(val.followers_url,null).data;

  return (
   
       <div className = "header">
        <div className = "name">
          <h1>Welcome to Github Users Data</h1>
        </div>
        <div className = "details">
           <img src = {val.avatar_url} className = "img"></img>
           <h1>{val.name}</h1> 
           <h6>{val.company}</h6>
           <div>{val.location}</div>
           <a href = {val.blog}>{val.blog}</a>
        </div>
        <div>
            {
              followers.map((obj) => {
                const {login,id,avatar_url} = obj;
                return(
                  <div key = {id}>
                    <div>{login}</div>
                    <img src = {avatar_url}></img>
                  </div>
                )
              })
            }
        </div>

       </div>
  );
  
}



export default User;