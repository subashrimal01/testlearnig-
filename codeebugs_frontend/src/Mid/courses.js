import { Component } from "react";

class Courses extends Component{
    render(){
        return(
            <section className="class-area bg-fdf6ed pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <span>Classes</span>
      <h2>Popular Courses</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-class">
          <div className="class-image">
            <a href="#">
              <img src="assets/img/class/class-1.jpg" alt="image" />
            </a>
          </div>
          <div className="class-content">
            <div className="price">$880</div>
            <h3>
              <a href="#">Color Matching</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="class-list">
              <li>
                <span>Age:</span>
                3-5 Year
              </li>
              <li>
                <span>Time:</span>
                8-10 AM
              </li>
              <li>
                <span>Seat:</span>
                25
              </li>
            </ul>
            <div className="class-btn">
              <a href="#" className="default-btn">Join Class</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-class">
          <div className="class-image">
            <a href="#">
              <img src="assets/img/class/class-2.jpg" alt="image" />
            </a>
          </div>
          <div className="class-content">
            <div className="price">$790</div>
            <h3>
              <a href="#">Learning Disciplines</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="class-list">
              <li>
                <span>Age:</span>
                3-5 Year
              </li>
              <li>
                <span>Time:</span>
                8-10 AM
              </li>
              <li>
                <span>Seat:</span>
                25
              </li>
            </ul>
            <div className="class-btn">
              <a href="#" className="default-btn">Join Class</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-class">
          <div className="class-image">
            <a href="#">
              <img src="assets/img/class/class-3.jpg" alt="image" />
            </a>
          </div>
          <div className="class-content">
            <div className="price">$590</div>
            <h3>
              <a href="#">Drawing</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="class-list">
              <li>
                <span>Age:</span>
                3-5 Year
              </li>
              <li>
                <span>Time:</span>
                8-10 AM
              </li>
              <li>
                <span>Seat:</span>
                25
              </li>
            </ul>
            <div className="class-btn">
              <a href="#" className="default-btn">Join Class</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="class-shape">
    <div className="shape-1">
      <img src="assets/img/class/class-shape-1.png" alt="image" />
    </div>
    <div className="shape-2">
      <img src="assets/img/class/class-shape-2.png" alt="image" />
    </div>
  </div>
</section>

        )
    }
}

export default Courses;