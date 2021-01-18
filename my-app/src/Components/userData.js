import React, {useEffect,useState} from 'react';
import Followers from './followers';
import Personal_data from './personal_data';
import {useParams} from "react-router-dom"
import { useFetch } from './useFetch';
import './user_data.css'
const url = 'https://api.github.com/users';
function User () {
  const {login} = useParams();
  const ur = 'https://api.github.com/users';
  const user_data = useFetch(ur,login).data;
  const {url} = (user_data);
  const val = useFetch(url,null).data;
  const followers = useFetch(val.followers_url,null).data;

  return (
   
       <div className = "header">
        <div className = "name">
          <h1>Followers</h1>
        </div >
        <div className = "stf">
        <div className = "stf">
        <Personal_data {...val}></Personal_data>
        </div>
        <div className = "pr">
          
        {
          followers.map((obj) => {
            return(
              <Followers key = {obj} {...obj}></Followers>
            )
          })
        }
        </div>
        </div>
       </div>
  );
  
}



export default User;