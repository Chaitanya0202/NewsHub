import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      count: 10,
    };
  }

  render() {
    const apiKey = "a2ecbbab3d5d4f3fa45e934446a6b14e";
    const show = async () => {
      let result = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2023-11-09&to=2023-11-09&sortBy=popularity&apiKey=${apiKey}`
      );
      this.setState({
        news: result.data.articles,
      });
      
    };
    return (
      <>
      <h3 className="fw-bold">DashBoard</h3>
        <button
          className="btn btn-outline-success my-6 rounded-sm"
          onClick={show}
        >
          Click Here..!
        </button>
        

        <div className="container col">
          <div className="row">

          {this.state.news.map((n) => (
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
    );
  }
}
export default Home
