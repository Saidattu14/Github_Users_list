import React, {useEffect,useState} from 'react';
import Followers from './followers';
import Personal_data from './personal_data';
import {useParams} from "react-router-dom"
import { useFetch } from './useFetch';
import {Link, useLocation} from 'react-router-dom';
import './user_data.css'
function User (props) {
  
  const Loc = useLocation();
  
  const {login} = useParams();
  
  const user_data = useFetch(Loc.state.url,null).data;
  console.log(user_data)
  const {url} = (user_data);
  const val = useFetch(url,null).data;
  console.log(val)
  const followers = useFetch(val.followers_url,null).data;

  return (
   
       <div className = "header">
        <div className = "name">
          <h1>Followers</h1>
        </div >
        <div className = "stf">
        <div className = "stf">
        <Personal_data {...user_data}></Personal_data>
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