import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
const API='https://jsonplaceholder.typicode.com/users';


const initialState= {
    data : [],
    isLoading : true,
    error : null
}

const reducer = (action, state) => {

    switch(action.type) {
     case 'SET_LOADING' :
        return {
            ...state,
            isLoading : true
        }
    
        case 'FETCH_SUCCESS' :
             return  {
                ...state,
                data : action.payload,
                isLoading : false
             }
        case 'FETCH_ERROR' :
            return {
                ...state,   
                error : action.payload,
                isLoading : false
            }

        default :
            return state;
    }

}

const AppProvider = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
  
    useEffect( () => {
        
        dispatch({type : "SET_LOADING"})
        const fetchData = async () => {
            try {
                const response = await axios.get(API);
                dispatch({type : 'FETCH_SUCCESS' , payload : response.data})
            } catch(err) { 
                console.log("Error :", err)
                dispatch({ type : 'FETCH_ERROR', payload : err})
            } 
        }

        fetchData()
    }, [])

    return (
    <>

           
    <div className='bg-pink-300 flex flex-col items-center'>
        {state.isLoading ? (
            <p>Loading...</p>
        ) : state.error ? (
            <p>Error: {state.error.message}</p>
        ) : (
            state.data.map((user) => (
                <p key={user.id} className='text-center'>
                    {user.name}    
                </p>
            ))
        )}
    </div>

    </>)
}

export default AppProvider;
