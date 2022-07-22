import { Component } from "react";
import { NavLink } from "react-router-dom";

class Admindashboard extends Component {

  logout = (e) => {
    localStorage.clear()
    window.location.href = "/login"
  }
  render() {
      return (
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item nav-profile">
                  <a href="#" className="nav-link">
                    <div className="nav-profile-image">
                      <img src="adminassets/images/faces/face1.jpg" alt="profile" />
                      <span className="login-status online" />
                    </div>
                    <div className="nav-profile-text d-flex flex-column">
                      <span className="font-weight-bold mb-2">David Grey. H</span>
                      <span className="text-secondary text-small">Project Manager</span>
                    </div>
                    <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="menu-title">Dashboard</span>
                    <i className="mdi mdi-home menu-icon" />
                  </a>
                </li>


                <li className="nav-item">
                  <NavLink to={"/admin/users"} className="nav-link">
                    <span className="menu-title">Users</span>
                    <i className="mdi mdi-format-list-bulleted menu-icon" />
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={"/admin/courses"} className="nav-link" >
                    <span className="menu-title">Courses</span>
                    <i className="mdi mdi-table-large menu-icon" />
                  </NavLink>
                </li>
                <li className="nav-item sidebar-actions">
                  <a href="/courseinsert"><span className="nav-link">
                    <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a Course</button>
                  </span></a>
                </li>
                <li className="nav-item sidebar-actions">
                  <h1><span className="nav-link">
                    <button className="btn btn-danger ml-3" onClick={this.logout}>Logout</button>
                  </span></h1>
                </li>
              </ul>
            </nav>
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="page-header">
                  <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                      <i className="mdi mdi-home" />
                    </span> Dashboard
                  </h3>
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">
                        <span />Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="row">
                  <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-danger card-img-holder text-white">
                      <div className="card-body">
                        <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                        <h4 className="font-weight-normal mb-3">Weekly Sales <i className="mdi mdi-chart-line mdi-24px float-right" />
                        </h4>
                        <h2 className="mb-5">$ 15,0000</h2>
                        <h6 className="card-text">Increased by 60%</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-info card-img-holder text-white">
                      <div className="card-body">
                        <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                        <h4 className="font-weight-normal mb-3">Weekly Orders <i className="mdi mdi-bookmark-outline mdi-24px float-right" />
                        </h4>
                        <h2 className="mb-5">45,6334</h2>
                        <h6 className="card-text">Decreased by 10%</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-success card-img-holder text-white">
                      <div className="card-body">
                        <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                        <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-right" />
                        </h4>
                        <h2 className="mb-5">95,5741</h2>
                        <h6 className="card-text">Increased by 5%</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Recent Tickets</h4>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th> Assignee </th>
                                <th> Subject </th>
                                <th> Status </th>
                                <th> Last Update </th>
                                <th> Tracking ID </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img src="adminassets/images/faces/face1.jpg" className="mr-2" alt="image" /> David Grey
                                </td>
                                <td> Fund is not recieved </td>
                                <td>
                                  <label className="badge badge-gradient-success">DONE</label>
                                </td>
                                <td> Dec 5, 2017 </td>
                                <td> WD-12345 </td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="adminassets/images/faces/face2.jpg" className="mr-2" alt="image" /> Stella Johnson
                                </td>
                                <td> High loading time </td>
                                <td>
                                  <label className="badge badge-gradient-warning">PROGRESS</label>
                                </td>
                                <td> Dec 12, 2017 </td>
                                <td> WD-12346 </td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="adminassets/images/faces/face3.jpg" className="mr-2" alt="image" /> Marina Michel
                                </td>
                                <td> Website down for one week </td>
                                <td>
                                  <label className="badge badge-gradient-info">ON HOLD</label>
                                </td>
                                <td> Dec 16, 2017 </td>
                                <td> WD-12347 </td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="adminassets/images/faces/face4.jpg" className="mr-2" alt="image" /> John Doe
                                </td>
                                <td> Loosing control on server </td>
                                <td>
                                  <label className="badge badge-gradient-danger">REJECTED</label>
                                </td>
                                <td> Dec 3, 2017 </td>
                                <td> WD-12348 </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Admindashboard;