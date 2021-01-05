import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://5ff3523528c3980017b19338.mockapi.io/api/articles')
        .then((response) => setData(response.data))
        .catch(error => console.log(error))
    }, [])
    
    return(
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    )
}