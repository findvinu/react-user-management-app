import axios from "axios";
import { useState, useEffect } from "react";

const useGetUsers = (url, method) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
        setLoading(true)
        try{
           const response = await axios({
            method: method.toLowerCase(),
            url
        })
        setUsers(response.data)
        console.log('response.data', response.data)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    };
    fetchUsers();
  }, [method, url]);

  return { users, loading, error};
};

export default useGetUsers;
