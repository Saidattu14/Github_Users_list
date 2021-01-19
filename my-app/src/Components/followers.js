import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './home.css'
const Followers = (obj) => {
  const {login,avatar_url,html_url,url} = obj;
  
  return (
      <React.Fragment>
        <Link to = {{
          pathname : `/user/${login}`,
          state: {url},
         }}>
        
        <div className = "User_data1">
        <img src = {avatar_url} className = "Img1" alt = ""></img>
        <div className = "details_home">
          <div>Name : {login}</div>
          <a href = {html_url} onClick = {html_url}>Github : {html_url}</a>
          {/* <a href={url}>Api:{url}</a> */}
        </div> 
        </div>
        </Link>
      </React.Fragment>
  );
  
}



export default Followers;