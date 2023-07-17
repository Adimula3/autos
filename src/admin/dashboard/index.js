
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/dashboard.css";
import DashboardHome from "./pages/home";
import TopBar from "./components/top-bar";
import SideBar from "./components/side-bar";
import HomeSpinner from "./components/home-spinner";
import DealersPage from "./pages/dealers";
import Testimonials from "./pages/testimonials";
import ProfileSettings from "./pages/settings/profile";
import StoreSettings from "./pages/settings";
import AddProduct from "./pages/products";
import ManageProducts from "./pages/products/manage_auto";


const AdminDashboard = () => {

    const isMounted = useRef()
    const params = useParams()

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false)


    const pages = () => {

        if (params.dash_url === "home") {
            return <DashboardHome />
        }

        else if (params.product_url === "add") {
            return <AddProduct />
        }
        else if (params.product_url === "manage") {
            return <ManageProducts />
        }

        else if (params.dash_url === "auto_dealers") {
            return <DealersPage />
        }
        else if (params.dash_url === "testimonials") {
            return <Testimonials />
        }

        else if (params.settings_url === "profile") {
            return <ProfileSettings  />
        }

        else if (params.settings_url === "business") {
            return <StoreSettings  />
        }

    }


    useEffect(() => {
        if (isMounted) {

            window.scrollTo(0, 0);
        }
        return () => {
            isMounted.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted])



    return (
        <>
            {loading ?
                (<HomeSpinner />) : (
                    <>
                        <div className="admin-wrap">

                            <TopBar />
                            <div className="main-wrap">
                                <SideBar pageName={params.dash_url || params.product_url || params.settings_url} />
                                <div id="main-body" className="main-body">
                                    {pages()}
                                </div>
                            </div>
                        </div> 

                    </>
                )}
        </>
    )

}

export default AdminDashboard; 