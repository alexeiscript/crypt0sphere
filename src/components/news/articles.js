import React, { useContext } from "react";
import { NewsContext } from './newsContext' 
import NewsArticle from './newsArticle'
import '../../assets/scss/articles.scss'

function Articles(props) {
    const { data } = useContext(NewsContext);
    // const newsTitle = data.data.title
    if (!data) {
        return null;
    }
    console.log(data)
    return(    
        <div>
             {data.map((item) => (
                 <NewsArticle data={item}  />
             ))}
            
        </div>  
    )
}

export default Articles