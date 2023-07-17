import React from "react";
import "../../css/index.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";
import AddUserIcon from "../../../../assets/add-user.png";


const ProfileSettings = () => {


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
                        <p>  Profile Settings  </p>
                      </div>
                      <form autoComplete="off">

                        <div className="form-group">
                          <label for="fullname" className="form-label"> Full Name </label>
                          <input
                            type="text"
                            className="form-control"
                            name="full_name"
                            id="full_name"
                            value="Joseey Joseph"
                            placeholder="Full Name"
                          />
                        </div>

                        <div className="form-group">
                          <label for="email" className="form-label" > Email </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value="josephjoseey@ymail.com"
                            placeholder="cars@you.com"
                            readOnly={true}
                          />
                        </div>

                        <div className="form-group">
                          <label for="phone-number" className="form-label"> Phone Number </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone_number"
                            id="phone_number"
                            placeholder="09012345678"
                            value="09012345678"
                          />
                        </div>
     

                        <div className="form-group image-placeholder">
                          <label className="form-label">Upload Profile picture </label>
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
                            Update Profile
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

export default ProfileSettings;
