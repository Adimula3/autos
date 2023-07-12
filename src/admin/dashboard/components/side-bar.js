import { Link } from "react-router-dom";
import AutoLogo from "../assets/images/logo.png";
import { useState } from "react";
const SideBar = ({ pageName }) => {

    const darkMode = () => {
        console.log("Dark Mode Loading...")
    }
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
      };
      const toggleDropdown3 = () => {
        setDropdownOpen3(!dropdownOpen3);
      };
  

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
                               
                               {/* Products */ }
                               <li>
                                <a href="#" onClick={toggleDropdown}>
                                    Product  <i className={dropdownOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i>
                                     </a>
                                {dropdownOpen && (
                                    <ul className="dropdown">
                                    {/* addProduct menu */}
                                 <li className={`menu-item ${pageName === 'add_product' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/add_product" className="menu-link">
                                        <i class="fa-solid fa-plus"></i>
                                        <span className="sidebar-text">Add Product</span>
                                    </Link>
                                </li>
                                     {/* addProduct menu */}
                                 <li className={`menu-item ${pageName === 'edit_product' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/edit_product" className="menu-link">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        <span className="sidebar-text">Edit Product</span>
                                    </Link>
                                </li>
                                    {/* view product menu */}
                                <li className={`menu-item ${pageName === 'manage_listings' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/manage_listings" className="menu-link">
                                        <i className="fa-solid fa-boxes-stacked"></i>
                                        <span className="sidebar-text">Car Listings</span>
                                    </Link>
                                </li>
                                  </ul>
                      
                                )}
                               </li>
                                  {/* Agents */ }
                                  <li>
                                <a href="#" onClick={toggleDropdown2}>
                                    Dealers  <i className={dropdownOpen2 ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i>
                                     </a>
                                {dropdownOpen2 && (
                                    <ul className="dropdown">
                                     {/* addDealers menu */}
                                 <li className={`menu-item ${pageName === 'add_dealer' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/add_dealer" className="menu-link">
                                        <i class="fa-solid fa-plus"></i>
                                        <span className="sidebar-text">Add Dealer</span>
                                    </Link>
                                </li>
                                  </ul>
                      
                                )}
                               </li>

                                  {/* Testimonials */ }
                                  <li>
                                <a href="#" onClick={toggleDropdown3}>
                                    Testionials  <i className={dropdownOpen3 ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i>
                                     </a>
                                {dropdownOpen3 && (
                                    <ul className="dropdown">

                                 {/* addTESTIMONIALS menu */}
                                 <li className={`menu-item ${pageName === 'testimonials' ? 'active' : ''}`}>
                                    <Link to="/admin/dashboard/testimonials" className="menu-link">
                                        <i class="fa-solid fa-plus"></i>
                                        <span className="sidebar-text">Add Testimonials</span>
                                    </Link>
                                </li>
                                 
                                  </ul>
                      
                                )}
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