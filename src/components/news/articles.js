import React, { useContext } from "react";
import { NewsContext } from './newsContext' 
import NewsArticle from './newsArticle'
import '../../assets/scss/articles.scss'

function Articles(props) {
    const { data } = useContext(NewsContext)

    if (!data) {
        return null;
    }

    return(    
        <div>
             {data.map((item, index) => (
                 <NewsArticle key={index} data={item}  />
             ))}
            
        </div>  
    )
}

export default Articles