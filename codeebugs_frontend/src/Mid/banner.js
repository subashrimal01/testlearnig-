import { Component } from "react";

class Banner extends Component{
    render(){
        return(
            <div className="main-banner">
  <div className="main-banner-item banner-item-three">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="main-banner-content">
            <span>Play, Learn and Grow</span>
            <h1>We are a Childcare Professional</h1>
            <div className="banner-btn">
              <a href="#" className="default-btn">
                Learn More
              </a>
              <a href="#" className="optional-btn">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="main-banner-shape">
    <div className="banner-bg-shape">
      <img src="assets/img/main-banner/banner-bg-shape-1.png" alt="image" />
    </div>
    <div className="banner-bg-shape-2">
      <img src="assets/img/main-banner/banner-bg-shape-2.png" alt="image" />
    </div>
    <div className="banner-child">
      <div className="child-1">
        <img src="assets/img/main-banner/child-1.png" alt="image" />
      </div>
      <div className="child-2">
        <img src="assets/img/main-banner/child-2.png" alt="image" />
      </div>
    </div>
  </div>
</div>


        )
    }
}

export default Banner;