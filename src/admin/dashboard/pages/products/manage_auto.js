import { useState } from "react";
import "./product.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";

const ManageProducts = () => {

    // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

    return (
        <>
            {loading ? (
                <DashSpinner />
            ) : (
                <div>
                    <HandleScroll />
                    <div id="category-container" className="main-container">
                        {/* start your coding from here you can give the div any class name oooo*/}

                        <div className="dealer-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-md-12">

                                    <div className="dealer-form">
                                        <div className="container-header">
                                            <p>  Manage Auto Listings </p>
                                        </div>
                                    

                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* and end it here */}
                    </div>
                </div >

            )
            }
        </>
    );
}

export default ManageProducts;
