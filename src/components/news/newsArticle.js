import React from "react";
import '../../assets/scss/articles.scss'

function NewsArticle({data}) {
  // const date = data.createdAt
  // const theDate = new Date().getDay()
  // console.log(theDate)
  return (
    <article className="article-div" >
        <div className="image-div">
            <img src={data.image} alt=""/>
        </div>
        <div className="article-details">
            <h2>{data.title}</h2>
            {/* <h3>wepul</h3> */}
            <p>{data.createdAt}</p>
            <p>{data.author}</p>
            <p>{data.description}</p>
        </div>
    </article>
  );
}

export default NewsArticle;