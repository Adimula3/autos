
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/dashboard.css";
import DashboardHome from "./pages/home";
import TopBar from "./components/top-bar";
import SideBar from "./components/side-bar";
import HomeSpinner from "./components/home-spinner";
import CarListPage from "./pages/listings";
import AddProduct from "./pages/addProduct/addProduct";


const AdminDashboard = () => {

    const isMounted = useRef()
    const params = useParams()

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false)


    const pages = () => {

        if (params.dash_url === "home") {
            return <DashboardHome />
        }
        else if (params.dash_url === "manage_listings") {
            return <CarListPage />
        }
        else if (params.dash_url === "add_product") {
            return <AddProduct />
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
                                <SideBar pageName={params.dash_url} />
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