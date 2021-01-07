import {useState,useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const getUsers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
    };
    useEffect(() => {
        getUsers();
    }, []);
    return {data};
};