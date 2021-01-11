import React from 'react';
import './personal.css';
import BusinessIcon from '@material-ui/icons/Business';

const Personal_data = ({name,login,avatar_url,company,email,blog,twitter_username,public_repos,
    followers,following
   }) => {
 

  return (
   <div className = "details">
       <img src = {avatar_url} className = "img"></img>
       <div>{name}</div>
       <div>{login}</div>
       <div><BusinessIcon></BusinessIcon></div>
   </div>
      
  );
  
}



export default Personal_data;