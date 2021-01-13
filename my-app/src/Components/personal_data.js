import React from 'react';
import './personal.css';


const Personal_data = ({name,login,avatar_url,company,email,blog,twitter_username,public_repos,
    followers,following
   }) => {
 

  return (
   <div className = "details">
       <img src = {avatar_url} className = "img"></img>
       <div>{name}</div>
       <div>{login}</div>
   </div>
      
  );
  
}



export default Personal_data;