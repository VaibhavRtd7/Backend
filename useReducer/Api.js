import React, { useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
const API='https://jsonplaceholder.typicode.com/users';


const initialState= {
    data : []
}

const reducer = (state, action) => {

    switch(action.type) {
    
        case 'FETCH_SUCCESS' :
             return  {
                ...state,
                data : action.payload,
                isLoading : false
             }

        default :
            return state;
    }

}

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
  
    useEffect( () => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get(API);
                dispatch({type : 'FETCH_SUCCESS' , payload : response.data})
            } catch(err) { 
                console.log("Error :", err)
            } 
        }

        fetchData()
    }, [])

    return (
    <>
    <AppContext.Provider value={{...state}}> 
        {children}
    </AppContext.Provider>
           
    </>)
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider , useGlobalContext, AppContext} ;
