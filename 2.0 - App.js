import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API='https://jsonplaceholder.typicode.com/users';


const App = () => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect( () => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get(API);
                setData(response.data);
            } catch(err) { 
                setError(err);
            } finally{
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    return (<>

    <div className="text-2xl font-bold underline grid justify-center ">
      Hello world!
    </div>

        
        { loading ? ( 
            <p> Loading...</p>
        ) : error ? (
            <p> Error: {error.message}</p>
        ) :  (
            <div className='flex flex-col items-center'>
                {data.map( (user) => {
                    return (
                        <>
                          <p> {user.email}</p>  
                        </>
                    )
                 })}
            </div>
        )}

    </>)
}

export default App;
