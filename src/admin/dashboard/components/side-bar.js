import { Link } from "react-router-dom";
import AutoLogo from "../../../assets/agent-demo.jpeg";
const SideBar = ({ pageName }) => {

    const darkMode = () => {
        console.log("Dark Mode Loading...")
    }


    return (
        <>
            <div id="side-bar" className="side-bar">
                <div className="sidebar-container">
                    <div id="sidebar-profile" className="sidebar-profile">
                        <div className="sidebar-admin">
                            <div className="sidebar-image">
                                <img src={AutoLogo} alt="sidebar profile" className="img-fluid" />
                            </div>
                            <div className="sidebar-admin-info">
                                <p className="name">Austin Textas </p>
                                <p className="role">Administrator </p>
                            </div>
                        </div>

                        <div className="sidebar-mini">
                            <ul>
                                <li>
                                    <button className="btn btn-secondary" onClick={darkMode} title="Dark Mode" > <i className="fa-solid fa-moon"></i> </button>
                                </li>


                                <li>  <button className="btn btn-secondary" title="Profile Settings"> <i className="fa-solid fa-gear"></i> </button> </li>
                                <li>
                                    <button className="btn btn-secondary" title="Log Out"><i className="fa-solid fa-power-off"></i> </button>
                                </li>


                            </ul>
                        </div>
                        <hr />
                    </div>



                    <div className="sidebar-nav">
                        <nav>
                            <ul className="sidebar-menu">
                                {/* dashboard menu */}
                                <li className={`menu-item ${pageName === 'home' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/home" className="menu-link">
                                        <i className="fa-solid fa-house"></i>
                                        <span className="sidebar-text">Dashboard</span>
                                    </Link>
                                </li>


                                <li className={`menu-item ${pageName === 'add' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/auto/add" className="menu-link">
                                    <i class="fa-solid fa-car"></i>
                                        <span className="sidebar-text">Add Auto </span>
                                    </Link>
                                </li>


                                <li className={`menu-item ${pageName === 'manage' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/auto/manage" className="menu-link">
                                        <i className="fa-solid fa-boxes-stacked"></i>
                                        <span className="sidebar-text">Manage Autos </span>
                                    </Link>
                                </li>


                                <li className={`menu-item ${pageName === 'auto_dealers' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/auto_dealers" className="menu-link">
                                    <i class="fa-solid fa-user-group"></i>
                                        <span className="sidebar-text">Auto Dealers </span>
                                    </Link>
                                </li>


                                <li className={`menu-item ${pageName === 'testimonials' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/testimonials" className="menu-link">
                                    <i class="fa-solid fa-comments"></i>
                                        <span className="sidebar-text">Testimonials</span>
                                    </Link>
                                </li>


                                <li className={`menu-item ${pageName === 'profile' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/settings/profile" className="menu-link">
                                    <i class="fa-solid fa-user-gear"></i>
                                        <span className="sidebar-text">Profile Settings</span>
                                    </Link>
                                </li>

                                
                                


                                <li className={`menu-item ${pageName === 'business' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/settings/business" className="menu-link">
                                    <i class="fa-solid fa-toolbox"></i>
                                        <span className="sidebar-text">Site Settings</span>
                                    </Link>
                                </li>

                                <hr />

                                {/* view store menu */}
                                <li className="menu-item">
                                    <Link target="_blank" to="/" className="menu-link">
                                        <i className="fa-solid fa-shop"></i>
                                        <span className="sidebar-text">View Site</span>
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar;