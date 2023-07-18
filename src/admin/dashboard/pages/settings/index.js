import React from "react";
import "../../css/index.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";
import AddUserIcon from "../../../../assets/add-image.png";


const StoreSettings = () => {


    let fileArray;
    let fileObj;

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null)


    const onChange = (e) => {

        if (e.target.files) {

            fileObj = e.target.files;
            fileArray = URL.createObjectURL(fileObj[0]);
            setImage(fileArray)
        }

    }


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
                                <div className="col-md-7">

                                    <div className="dealer-form">
                                        <div className="container-header">
                                            <p>  Business Settings  </p>
                                        </div>
                                        <form autoComplete="off">

                                            <div className="form-group">
                                                <label for="fullname" className="form-label"> Business Name </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="business_name"
                                                    id="business_name"
                                                    value="Mofardson-Autos"
                                                    placeholder="Business Name"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label for="email" className="form-label" > Business Email </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="business_email"
                                                    id="business_email"
                                                    value="support@mofarsonautos.com"
                                                    placeholder="cars@you.com"

                                                />
                                            </div>

                                            <div className="form-group">
                                                <label for="phone-number" className="form-label"> Business Phone  </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone_number"
                                                    id="phone_number"
                                                    placeholder="09012345678"
                                                    value="09012345678"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label for="phone-number" className="form-label"> Business Address  </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="business_address"
                                                    id="business_address"
                                                    placeholder="Street Address"

                                                />
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="phone-number" className="form-label"> State  </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="state"
                                                            id="state"
                                                            placeholder="Lagos"

                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="phone-number" className="form-label"> Country </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="country"
                                                            id="country"
                                                            placeholder="Nigeria"

                                                        />
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="form-group image-placeholder">
                                                <label className="form-label">Upload Business Logo </label>
                                                <label htmlFor="upload-cover-photo">
                                                    <div className="placeholder-container">
                                                        <img src={`${image ? (image) : (AddUserIcon)}`} alt="" className="img-fluid" />

                                                    </div>
                                                </label>
                                                <input type="file"
                                                    id="upload-cover-photo"
                                                    accept='image/*'
                                                    hidden={true}
                                                    onChange={onChange}
                                                    className="form-control" />
                                            </div>

                                            <div className="form-group form-btn">
                                                <button className="btn btn-primary" type="submit">
                                                    Update Settings
                                                </button>
                                            </div>

                                        </form>

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

export default StoreSettings;
