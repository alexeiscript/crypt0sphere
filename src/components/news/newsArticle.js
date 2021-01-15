import React from "react";
import moment from 'moment'
import '../../assets/scss/articles.scss'

function NewsArticle({data}) {

  const created = data.createdAt
  const date = moment(created).format('D MMM YY')

  return (
    <article className="article-div" >
        <div className="image-div">
            <img src={data.image} alt=""/>
        </div>
        <div className="article-details">
            <h2>{data.title}</h2>
            <p>{date}</p>
            <p>{data.author}</p>
            <p>{data.description}</p>
        </div>
    </article>
  );
}

export default NewsArticle;