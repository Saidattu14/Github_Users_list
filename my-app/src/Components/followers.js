import React, {useEffect,useState} from 'react';
import './home.css'
const Followers = (obj) => {
  const {login,avatar_url,html_url} =obj;

  return (
      <React.Fragment>
        <div className = "User_data1">
        <img src = {avatar_url} className = "Img1" alt = ""></img>
        <div className = "details_home">
          <div>Name : {login}</div>
          <a href = {html_url} onClick = {html_url}>Github : {html_url}</a>
          {/* <a href={url}>Api:{url}</a> */}
        </div> 
        </div>
      </React.Fragment>
  );
  
}



export default Followers;