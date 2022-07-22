function Notification() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-sm-10 col-12 offset-lg-1 offset-sm-1">
                    <nav className="navbar navbar-expand-lg bg-info rounded">
                        <a className="navbar-brand text-light" href="#">Logo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display: 'unset !important' }}>
                            <ul className="nav nav-pills mr-auto justify-content-end">
                                <li className="nav-item active">
                                    <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Project</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-bell" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="head text-light bg-dark">
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 col-12">
                                                    <span>Notifications (3)</span>
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
                                        <li className="footer bg-dark text-center">
                                            <a href className="text-light">View All</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Notification;