import {useState,useEffect} from 'react'

export const useFetch = (url,name) => {
    const [data, setData] = useState([]);
    const [res,setRes] = useState(true);
    const getUsers = async () => {
        const response = await fetch(url);
        const val = await response.json();
       
        if(name !== null)
        {
            
            const data = val.find((obj) => obj.login === name)
            setData(data);
            setRes(false);
        }
        else
        {
            const data = val;
            setData(data);
            setRes(false);
        }
        
           
           
       
    };
    useEffect(() => {
        getUsers();
    }, [url]);
    return {data};
};