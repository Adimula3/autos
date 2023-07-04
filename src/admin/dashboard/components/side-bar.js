import { Link } from "react-router-dom";
import AutoLogo from "../assets/images/logo.png";

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
                                <p className="name">John Doe </p>
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

                                {/* view product menu */}
                                <li className={`menu-item ${pageName === 'manage_listings' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/manage_listings" className="menu-link">
                                        <i className="fa-solid fa-boxes-stacked"></i>
                                        <span className="sidebar-text">Car Listings</span>
                                    </Link>
                                </li>



                                <hr />

                                {/* view store menu */}
                                <li className="menu-item">
                                    <Link target="_blank" to="/" className="menu-link">
                                        <i className="fa-solid fa-shop"></i>
                                        <span className="sidebar-text">View Store</span>
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