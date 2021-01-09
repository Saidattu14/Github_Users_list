import React, {useEffect,useState} from 'react';
import {Link,useParams} from "react-router-dom"
import { useFetch } from './useFetch';
const url = 'https://api.github.com/users';
const User = () => {
  const {name} = useParams();
  const usedata = useFetch(url,name).data;
  return (
   <React.Fragment>
      {
        <h1>Lodaing</h1>
      }
   </React.Fragment>
  );
}



export default User;