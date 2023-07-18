import React from "react";
import "../../css/index.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";
import AddUserIcon from "../../../../assets/add-user.png";
import agent45 from "../../assets/images/agent-demo.jpeg";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const DealersPage = () => {


  let fileArray;
  let fileObj;
  const MySwal = withReactContent(Swal)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [formContainer, setFormContainer] = useState(false)
  const [updateContent, setUpdateContent] = useState(false)
  const [image, setImage] = useState(null)

  const handleFormContainer = (container_name) => {

    if (container_name === 'form-container') {
      setFormContainer(true);
      setUpdateContent(false);
      setImage(null);

    }
    else if (container_name === 'list-container') {
      setFormContainer(false);
      setUpdateContent(false);

    }
  }


  const onEdit = async () => {
    try {

      setFormContainer(true);
      setUpdateContent(true);

    }
    catch (error) {
      console.log({ error })
    }
  }


  const onDelete = async () => {

    try {
      MySwal.fire({
        title: 'Do you want to remove this dealer?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove!'
      }).then(async (result) => {
        if (result.isConfirmed) {


          Swal.fire(
            'Deleted!',
            'Dealer info has been removed.',
            'success'
          )
        }

      }).then(() => {

      })

    }
    catch (error) {
      console.log({ error })
    }

  }

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

                  {formContainer ? (
                    // form container
                    <div className="dealer-form">
                      <div className="container-header">
                        <p>
                          {updateContent ? ('Update Dealer Info') : ('Add New Dealer')}
                        </p>
                        <button onClick={() => { handleFormContainer('list-container') }} className="btn btn-primary">View Dealers</button>
                      </div>
                      <form autoComplete="off">

                        <div className="form-group">
                          <label for="fullname" className="form-label"> Full Name </label>
                          <input
                            type="text"
                            className="form-control"
                            name="full_name"
                            id="full_name"
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
                            placeholder="cars@you.com"
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
                          />
                        </div>

                        <div className="form-group">

                          <div className="form-inline">
                            <i className="fa-brands fa-instagram"></i>
                            <input
                              type="text"
                              className="form-control"
                              name="instagram_url"
                              id="instagram_url"
                              placeholder="instagram.com/auto_collections"
                            />
                          </div>

                        </div>

                        <div className="form-group">

                          <div className="form-inline">

                            <i className="fa-brands fa-facebook-f"></i>
                            <input
                              type="text"
                              className="form-control"
                              name="facebook_url"
                              id="facebook_url"
                              placeholder="web.facebook.com/elonmuckAOC"
                            />
                          </div>

                        </div>

                        <div className="form-group">

                          <div className="form-inline">
                            <i className="fa-brands fa-whatsapp"></i>
                            <input
                              type="text"
                              className="form-control"
                              name="whatsapp_url"
                              id="whatsapp_url"
                              placeholder="wa.me/2349012345678"
                            />
                          </div>

                        </div>


                        <div className="form-group">
                          <div className="form-inline">
                            <i className="fa-brands fa-twitter"></i>
                            <input
                              type="text"
                              className="form-control"
                              name="twitter_usernmae"
                              id="twitter_usernmae"
                              placeholder="@elonmuskAOC"
                            />
                          </div>

                        </div>

                        <div className="form-group image-placeholder">
                          <label className="form-label">Upload dealer picture </label>
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
                            {updateContent ? ('Update') : ('Save')}
                          </button>
                        </div>

                      </form>

                    </div>

                  ) : (

                    // manage dealers section
                    <div className="manage-dealers">
                      <div className="container-header">
                        <p>Auto Dealers</p>
                        <button onClick={() => { handleFormContainer('form-container') }} className="btn btn-primary">Add New Dealer</button>
                      </div>


                      <div className="dealers-list">

                        <div className="empty-box">
                          <h3>No Dealers Added</h3>
                        </div>

                        {/* box list section */}

                        <div className="dealer-list-box">

                          <div className="dealer-list-info">
                            <div className="dealer-list-img">
                              <img src={agent45} alt="" className="img-fluid" />
                            </div>

                            <div className="dealer-list-profile">
                              <p className="name">Kayode Festus </p>
                              <p className="email">kayodefestus <br /> @mofardsonmotors.com</p>
                            </div>
                          </div>

                          <div className="dealer-action-buttons">
                            <p> <button onClick={() => onEdit()} className="btn btn-md btn-primary">Update <i class="fa-solid fa-user-pen"></i></button> </p>
                            <p> <button onClick={() => onDelete()} className="btn btn-md btn-danger">Remove  <i class="fa-solid fa-user-xmark"></i> </button> </p>
                          </div>

                        </div>

                      </div>
                    </div>
                  )}

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

export default DealersPage;
