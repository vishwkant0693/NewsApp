import React, { useEffect, useState } from 'react'
import Newscard from './Newscard';

const N = () => {

    const [articles, setArticles] = useState([]);

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=42bea68832854bb589a01f8f3eed4da3`;
        let data = await fetch(url);
        let newsData = await data.json()
        console.log(newsData.articles);
        setArticles(newsData.articles);
    }

    useEffect (()=>{
        updateNews();
    },[])
  return (
    <>
      <div className="container">
        <div className="row">
          {
            articles.map=(e)=>{
              return <div key={e.url}>
                <Newscard title={e.title ? e.title : "No Title"} description={e.description ? e.description : "No Desc." } url={e.url} imageToUrl ={e.imageToUrl ? e.imageToUrl : "img/notfound.png"} />
              </div>
            }
          }
        </div>
      </div>
    </>
  )
}

export default N