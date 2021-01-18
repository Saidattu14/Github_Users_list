import React from 'react';
import PropsTypes from  'prop-types'
import './personal.css';


const Personal_data = ({name,login,avatar_url,company,email,blog,twitter_username,public_repos,
    followers,following
   }) => {
 

  return (
   <div className = "details">
       <img src = {avatar_url} className = "img"></img>
       <div>{name}</div>
       <div>{login}</div>
       <div>{company}</div>
       <div>{email}</div>
       <div>{blog}</div>
       <div>{twitter_username}</div>
       <div>{public_repos}</div>
       <div>{followers}</div>
       <div>{following}</div>
   </div>
      
  );
  
}



export default Personal_data;