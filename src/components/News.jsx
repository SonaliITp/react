import React, { useEffect, useState } from 'react'
import axios from 'axios'
function News({country}) {

    const [news,setNews] = useState([])

    const apiUrl =`https://newsapi.org/v2/everything?q=${country}&apiKey=da91c6d8f54d4041953b5e42037f9ede`

    useEffect(()=>{
        axios.get(`${apiUrl}`).then((res) => {
            console.log(res.data.articles)
            setNews(res.data.articles)
        })

    },[country])
  return (
   
    <div className='container'>

        <div className='row card-group'>
        {
            news.map((e)=>{
                return(
                    <>
                    <div className='col-lg-4'>
                     <div class="card" style={{width: "18rem"}}>
                    <img src={e.urlToImage} class="card-img-top" alt="..." />
                     <div class="card-body">
                    <h5 class="card-title">{e.title}</h5>
                    <p class="card-text">{e.description}</p>
                    <a href={e.url} class="btn btn-primary">Read More...</a>
                     </div>
                     </div>
                     </div>
                    </>
                )
            })
        }
        </div>


        </div>
  )
}

        
  


export default News