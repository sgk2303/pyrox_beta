function Header() {
    return (
        <div>
            <header className="navbar pcoded-header navbar-expand-lg navbar-light">
                <div className="m-header">
                    <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
                    <a href="index.html" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Pyrox</span>
                    </a>
                </div>
                <a className="mobile-menu" id="mobile-header" href="javascript:">
                    <i className="feather icon-more-horizontal"></i>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li><a href="javascript:" className="full-screen" onClick="javascript:toggleFullScreen()"><i className="feather icon-maximize"></i></a></li>
                    </ul>
                    <ul className="navbar-nav ml-auto">

                        <li>
                            <div className="dropdown drp-user">
                                <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="icon feather icon-settings"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right profile-notification">
                                    <div className="pro-head">
                                        <img src="./assetsimages/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                                        <span>John Doe</span>
                                        <a href="auth-signin.html" className="dud-logout" title="Logout">
                                            <i className="feather icon-log-out"></i>
                                        </a>
                                    </div>
                                    <ul className="pro-body">
                                        <li><a href="javascript:" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                                        <li><a href="javascript:" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>

                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;