import { Component } from "react";

class Header extends Component {
  logOut = (e) => {
    localStorage.clear()
    window.location.href = "/login"
  }
  render() {

    if (localStorage.getItem('token')) {
      var menu = <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display: 'unset !important' }, { fontFamily: 'sans-serif' }}>
        <ul className="nav nav-pills mr-auto justify-content-end ml-4">
          <li className="nav-item active">
            <a className="nav-link text-dark" href="/" style={{ fontSize: '16px' }, { fontWeight: 'bold' }}>Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/courses" style={{ fontSize: '16px' }, { fontWeight: 'bold' }}>Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/courses" style={{ fontSize: '16px' }, { fontWeight: 'bold' }}>About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '16px' }, { fontWeight: 'bold' }}>
              Notifications
            </a>
            <ul className="dropdown-menu">
              <li className="head text-light bg-dark">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-12">
                    <span>Notifications</span>
                    <a href className="float-right text-light">Mark all as read</a>
                  </div>
                </div></li>
              <li className="notification-box">
                <div className="row">
                  <div className="col-lg-3 col-sm-3 col-3 text-center">
                    <img src="/demo/man-profile.jpg" className="w-50 rounded-circle" />
                  </div>
                  <div className="col-lg-8 col-sm-8 col-8">
                    <strong className="text-info">David John</strong>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <small className="text-warning">27.11.2015, 15:00</small>
                  </div>
                </div>
              </li>
              <li className="notification-box bg-gray">
                <div className="row">
                  <div className="col-lg-3 col-sm-3 col-3 text-center">
                    <img src="/demo/man-profile.jpg" className="w-50 rounded-circle" />
                  </div>
                  <div className="col-lg-8 col-sm-8 col-8">
                    <strong className="text-info">David John</strong>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <small className="text-warning">27.11.2015, 15:00</small>
                  </div>
                </div>
              </li>
              <li className="footer bg-dark text-center">
                <a href className="text-light">View All</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="others-options d-flex align-items-center">
          <div class="input-group">
            <div class="form-outline">
              <input id="search-input" type="search" id="form1" class="form-control rounded" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="nav-item dropdown">
        <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action font-weight-bold mt-4" style={{fontSize:"15px"}}>
          <img src="user.png" width={25} height={25} className="avatar mr-2 ml-3" alt="Avatar" />{localStorage.getItem('username')}<b className="caret" />
          </a>
        <div className="dropdown-menu" style={{width: "auto"}}>
          <a href="/userprofile" className="dropdown-item"><i className="fa fa-user-o" /> Profile</a>
          <a href="#" className="dropdown-item"><i className="fa fa-sliders" /> Settings</a>
          <div className="divider dropdown-divider" />
          <a href="/login" onClick={this.logOut} className="dropdown-item"><i className="material-icons"></i> Logout</a>
        </div>
      </div>

        </div>

    }
    else {
      var menu = <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display: 'unset !important' }, { fontFamily: 'sans-serif' }}>
        <ul className="nav nav-pills mr-auto justify-content-end ml-4">
          <li className="nav-item active">
            <a className="nav-link text-dark" href="/" style={{ fontSize: '16px' }, { fontWeight: 'bold' }}>Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/courses" style={{ fontSize: '16px' }, { fontWeight: 'bold' }}>Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/courses" style={{ fontSize: '16px' }, { fontWeight: 'bold' }}>About Us</a>
          </li>
        </ul>

        <div className="others-options d-flex align-items-center ">
          <div class="input-group">
            <div class="form-outline mr-4">
              <input id="search-input" type="search" id="form1" class="form-control rounded" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="others-options d-flex align-items-center">
          <div className="option-item">
            <a href="/login" className="default-btn">Login</a>
          </div>
        </div>
      </div>
    }

    return (
      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <a href="/">
                  <img src="logo.png" alt="image" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="/">
                <img src="logo.png" alt="image" />
              </a>
              {menu}
            </nav>
          </div>
        </div>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one" />
                <div className="circle circle-two" />
                <div className="circle circle-three" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;