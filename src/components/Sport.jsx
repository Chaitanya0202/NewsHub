import React, { useState } from 'react'
import axios from "axios";
function Sport() {

    const [news, setNews] = useState([]);

    const apiKey = "a2ecbbab3d5d4f3fa45e934446a6b14e";
    const show = async () => {
      let result = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=${apiKey}`
      );
    //   this.setState({
    //     news: result.data.articles,
    //   });
    setNews(result.data.articles)
      
    };
  return (
    <>
    <h3 className="fw-bold my-5">WellCome In Sport World</h3>
      <button
        className="btn btn-outline-success my-6 rounded-sm"
        onClick={show}
      >
        show More
      </button>
      

      <div className="container col">
        <div className="row">

        {news.map((n) => (
          <div className="card m-2 " style={{ width: "25rem" }}>
            <img src={n.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-lg">{n.title}</h5>
              <p className="card-text">{n.description}</p>
              <a href=''   className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
        </div>
        
      </div>
    </>
  )
}

export default Sport