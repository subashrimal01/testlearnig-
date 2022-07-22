import { Component } from "react";

class Footer extends Component{
    render() {
        return(
          <section className="footer-area pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="single-footer-widget">
        <div className="logo">
                <a href="/">
                <h3>Coodebugs</h3>
                </a>
              </div>
          <ul className="social">
            <li>
              <a href="#" target="_blank">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="bx bxl-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-footer-widget">
          <h3>Contact Us</h3>
          <ul className="footer-contact-info">
            <li>
              <i className="bx bxs-phone" />
              <span>Phone</span>
              <a href="tel:882569756">+977981508867</a>
            </li>
            <li>
              <i className="bx bx-envelope" />
              <span>codeebugs@gmail.com</span>
            </li>
            <li>
              <i className="bx bx-map" />
              <span>Address</span>
              Naxal, Kathmandu Nepal
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-footer-widget pl-5">
          <h3>Activities</h3>
          <ul className="quick-links">
            <li>
              <a href="https://lifehacker.com/">Life Hacker</a>
            </li>
            <li>
              <a href="https://www.howstuffworks.com/">How Stuff Works?</a>
            </li>
            <li>
              <a href="https://www.coderbyte.com/">Coder Byte</a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/dashboard">Hacker Rank</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>

)
    }
}

export default Footer;