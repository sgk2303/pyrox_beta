import './assets/fonts/fontawesome/css/fontawesome-all.min.css'
import './assets/plugins/animation/css/animate.min.css'
import './assets/css/style.css'

import { NavLink } from "react-router-dom";

function Navbar()
{
    return(
        <nav class="pcoded-navbar">
        <div class="navbar-wrapper">
            <div class="navbar-brand header-logo">
            <NavLink to="/dashboard" class="b-brand">
                    <div class="b-bg">
                        <i class="feather icon-trending-up"></i>
                    </div>
                    <span class="b-title">Pyrox</span>
            </NavLink>
            </div>
            <div class="navbar-content scroll-div">
                <ul class="nav pcoded-inner-navbar">
                    <li class="nav-item pcoded-menu-caption">
                        <label>Navigation</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item active">
                        <NavLink to="/dashboard" class="nav-link ">
                        <span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;