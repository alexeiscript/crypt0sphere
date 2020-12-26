import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/newsAPI'
import axios from 'axios'

function Home() {
    const [news, setNews] = useState()
    const apiKey = '4dcdc22c553141d6a8cece7522cd39e7'
    async function getNews() {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`);
            setNews(response.data.articles)
        } catch (error) {
            console.error(error);
        }
    }
  
    useEffect(() => {
      getNews()
    }, [])

    console.log(news)
    
    return(
       
            news.map((item) => {
                return(
                    <>
                        <h1>{item.title}</h1>
                        <h3>{item.author}</h3>
                    </>
                ) 
            })    
        
    )
}

export default Home