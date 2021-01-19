import {useState,useEffect} from 'react'

export const useFetch = (url,name) => {
    const [data, setData] = useState([]);
    const getUsers = async () => {
        
        if(name !== null )
        {
            const response = await fetch(url);
            const val = await response.json();
            const data = val.find((obj) => obj.login === name)
            setData(data);
           
        }
        else
        {
            const response = await fetch(url);
            const data= await response.json();

            setData(data);
           
        }};
    useEffect(() => {
        getUsers();

    }, [url]);
    return {data};
};