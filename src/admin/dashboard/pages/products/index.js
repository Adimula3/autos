import { useState } from "react";
import "./product.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import MainImageIcon from "../../../../assets/main-image.png";
import ThumbImageIcon from "../../../../assets/thumb-image.png";


const AddProduct = () => {

    let fileArray;
    let fileObj;

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    const [MainImage, setMainImage] = useState(null);
    const [ImageOne, setImageOne] = useState(null);
    const [ImageTwo, setImageTwo] = useState(null);
    const [ImageThree, setImageThree] = useState(null);
    const [ImageFour, setImageFour] = useState(null);
    const [ImageFive, setImageFive] = useState(null);



    const onMainImage = (e) => {

        if (e.target.files) {
            fileObj = e.target.files;
            fileArray = URL.createObjectURL(fileObj[0]);
            setMainImage(fileArray)
        }
    }

    const onThumbOne = (e) => {

        if (e.target.files) {
            fileObj = e.target.files;
            fileArray = URL.createObjectURL(fileObj[0]);
            setImageOne(fileArray)
        }
    }

    const onThumbTwo = (e) => {

        if (e.target.files) {
            fileObj = e.target.files;
            fileArray = URL.createObjectURL(fileObj[0]);
            setImageTwo(fileArray)
        }
    }

    const onThumbThree = (e) => {

        if (e.target.files) {
            fileObj = e.target.files;
            fileArray = URL.createObjectURL(fileObj[0]);
            setImageThree(fileArray)
        }
    }

    const onThumbFour = (e) => {

        if (e.target.files) {
            fileObj = e.target.files;
            fileArray = URL.createObjectURL(fileObj[0]);
            setImageFour(fileArray)
        }
    }

    const onThumbFive = (e) => {

        if (e.target.files) {
            fileObj = e.target.files;
            fileArray = URL.createObjectURL(fileObj[0]);
            setImageFive(fileArray)
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
                            <div className="dealer-form">
                                <div className="container-header">
                                    <p> Add New Auo </p>
                                </div>

                                <div className="auto-add-form">
                                    <form autoComplete="off">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="auto-img-section">
                                                    <div className="upload-img-wrapper">
                                                        <div className="row justify-content-center">
                                                            <div className="col-md-8">
                                                                <label htmlFor="upload-main-image" className="main-img-upload">
                                                                    {MainImage ? (
                                                                        <div className="main-img-box">
                                                                            <img src={MainImage} alt="" className="img-fluid" />
                                                                        </div>
                                                                    ) : (

                                                                        <div className="main-img-select-box">
                                                                            <img src={MainImageIcon} alt="" className="img-fluid" />
                                                                            <p> Browse main image</p>
                                                                        </div>
                                                                    )}
                                                                </label>
                                                                <input type="file"
                                                                    id="upload-main-image"
                                                                    accept='image/*'
                                                                    hidden={true}
                                                                    onChange={onMainImage}
                                                                    className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="thumbnail-row">

                                                            <div className="thumbnail-col">
                                                                <label htmlFor="upload-thumb-one" className="thumbnail-upload-img">
                                                                    {ImageOne ? (
                                                                        <div className="thumb-img-box">
                                                                            <img src={ImageOne} alt="" className="img-fluid" />
                                                                        </div>
                                                                    ) : (

                                                                        <div className="thumbnail-select-box">
                                                                            <img src={ThumbImageIcon} alt="" className="img-fluid" />
                                                                            <p> Interior image</p>
                                                                        </div>
                                                                    )}
                                                                </label>
                                                                <input type="file"
                                                                    id="upload-thumb-one"
                                                                    accept='image/*'
                                                                    hidden={true}
                                                                    onChange={onThumbOne}
                                                                    className="form-control" />
                                                            </div>

                                                            <div className="thumbnail-col">
                                                                <label htmlFor="upload-thumb-two" className="thumbnail-upload-img">
                                                                    {ImageTwo ? (
                                                                        <div className="thumb-img-box">
                                                                            <img src={ImageTwo} alt="" className="img-fluid" />
                                                                        </div>
                                                                    ) : (

                                                                        <div className="thumbnail-select-box">
                                                                            <img src={ThumbImageIcon} alt="" className="img-fluid" />
                                                                            <p> Interior image</p>
                                                                        </div>
                                                                    )}
                                                                </label>
                                                                <input type="file"
                                                                    id="upload-thumb-two"
                                                                    accept='image/*'
                                                                    hidden={true}
                                                                    onChange={onThumbTwo}
                                                                    className="form-control" />
                                                            </div>


                                                            <div className="thumbnail-col">
                                                                <label htmlFor="upload-thumb-three" className="thumbnail-upload-img">
                                                                    {ImageThree ? (
                                                                        <div className="thumb-img-box">
                                                                            <img src={ImageThree} alt="" className="img-fluid" />
                                                                        </div>
                                                                    ) : (

                                                                        <div className="thumbnail-select-box">
                                                                            <img src={ThumbImageIcon} alt="" className="img-fluid" />
                                                                            <p> Exterior image</p>
                                                                        </div>
                                                                    )}
                                                                </label>
                                                                <input type="file"
                                                                    id="upload-thumb-three"
                                                                    accept='image/*'
                                                                    hidden={true}
                                                                    onChange={onThumbThree}
                                                                    className="form-control" />
                                                            </div>


                                                            <div className="thumbnail-col">
                                                                <label htmlFor="upload-thumb-four" className="thumbnail-upload-img">
                                                                    {ImageFour ? (
                                                                        <div className="thumb-img-box">
                                                                            <img src={ImageFour} alt="" className="img-fluid" />
                                                                        </div>
                                                                    ) : (

                                                                        <div className="thumbnail-select-box">
                                                                            <img src={ThumbImageIcon} alt="" className="img-fluid" />
                                                                            <p> Exterior image</p>
                                                                        </div>
                                                                    )}
                                                                </label>
                                                                <input type="file"
                                                                    id="upload-thumb-four"
                                                                    accept='image/*'
                                                                    hidden={true}
                                                                    onChange={onThumbFour}
                                                                    className="form-control" />
                                                            </div>


                                                            <div className="thumbnail-col">
                                                                <label htmlFor="upload-thumb-five" className="thumbnail-upload-img">
                                                                    {ImageFive ? (
                                                                        <div className="thumb-img-box">
                                                                            <img src={ImageFive} alt="" className="img-fluid" />
                                                                        </div>
                                                                    ) : (

                                                                        <div className="thumbnail-select-box">
                                                                            <img src={ThumbImageIcon} alt="" className="img-fluid" />
                                                                            <p> Engine image</p>
                                                                        </div>
                                                                    )}
                                                                </label>
                                                                <input type="file"
                                                                    id="upload-thumb-five"
                                                                    accept='image/*'
                                                                    hidden={true}
                                                                    onChange={onThumbFive}
                                                                    className="form-control" />
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="auto-upload-info">
                                                        <div className="form-group">
                                                            <label for="description" className="form-label">
                                                                General Description
                                                            </label>
                                                            <textarea
                                                                class="form-control"
                                                                id="description"
                                                                rows="3"></textarea>
                                                        </div>

                                                        <div className="form-group">
                                                            <label
                                                                for="exterior_features"
                                                                className="form-label"
                                                            >
                                                                Exterior & Interior Features
                                                            </label>
                                                            <textarea
                                                                class="form-control"
                                                                id="exterior_features"
                                                                rows="3"></textarea>
                                                        </div>

                                                        <div className="form-group">
                                                            <label
                                                                for="car_body_features"
                                                                className="form-label"
                                                            >
                                                                Vehicle Body Features
                                                            </label>
                                                            <textarea
                                                                class="form-control"
                                                                id="car_body_features"
                                                                rows="3"></textarea>
                                                        </div>

                                                        <div className="form-group">
                                                            <label
                                                                for="car_safety_features"
                                                                className="form-label"
                                                            >
                                                                Car Safety Features
                                                            </label>
                                                            <textarea
                                                                class="form-control"
                                                                id="car_safety_features"
                                                                rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-5">
                                                <div className="auto-basic-info">
                                                    {/* row one */}
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label for="auto_name" className="form-label">
                                                                    Auto Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="auto_name"
                                                                    id="auto_name"
                                                                    placeholder="Lexus"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row price */}
                                                    <div className="row">
                                                        <div className="col-md-7">
                                                            <div className="form-group">
                                                                <label for="auto_price" className="form-label">
                                                                    Price (&#8358;)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="auto_price"
                                                                    id="auto_price"
                                                                    placeholder="5,000,000"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-5">
                                                            <div className="form-group">
                                                                <label for="auto_year" className="form-label">
                                                                    Year
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="auto_year"
                                                                    id="auto_year"
                                                                    placeholder="2004"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row two */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="auto_maker" className="form-label">
                                                                    Auto Maker
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="auto_maker"
                                                                    id="auto_maker"
                                                                    placeholder="Toyota"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="auto_brand" className="form-label">
                                                                    Auto Brand
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="auto_brand"
                                                                    id="auto_brand"
                                                                    placeholder="Lexus"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row three */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="body_color" className="form-label">
                                                                    Body Color
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="body_color"
                                                                    id="body_color"
                                                                    placeholder="RED"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="interior_color"
                                                                    className="form-label"
                                                                >
                                                                    Interior Color
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="interior_color"
                                                                    id="interior_color"
                                                                    placeholder="ORANGE"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row four */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Doors
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="2"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Seats
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="5"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row five */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    VIN
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="234HDGSGF34623"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Engine
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="16000"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row six */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Mileage
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="4980"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    HorsePower
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="300HP"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row seven */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Drive
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="4x4"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Fuel
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="Petrol"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row eight */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Transmission
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="Manual"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="exampleFormControlInput1"
                                                                    className="form-label"
                                                                >
                                                                    Condition
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control f-1"
                                                                    name="fname"
                                                                    id="fname"
                                                                    placeholder="New"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* row nine */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label
                                                                    for="auto_warrranty"
                                                                    className="form-label"
                                                                >
                                                                    Warranty
                                                                </label>
                                                                <select
                                                                    name="auto_warranty"
                                                                    className="form-control"
                                                                    id="auto_warranty"
                                                                >
                                                                    <option value="YES">YES </option>
                                                                    <option selected value="NO">
                                                                        NO
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="auto_status" className="form-label">
                                                                    Status
                                                                </label>
                                                                <select
                                                                    name="auto_status"
                                                                    className="form-control"
                                                                    id="auto_status"
                                                                >
                                                                    <option selected value="Available">
                                                                        Avaialable
                                                                    </option>
                                                                    <option value="Not Available">
                                                                        Not Avaialable
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>



                                                    {/* row nine */}
                                                    <div className="row">
                                                        <div className="col-md-4">

                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="form-group form-btn">
                                                                <button type="button" className="btn btn-primary"> Save </button>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* and end it here */}
                    </div>
                </div>
            )}
        </>
    );
};

export default AddProduct;
