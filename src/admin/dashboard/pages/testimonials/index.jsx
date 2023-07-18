import React from 'react';
import "../../css/index.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Testimonials = () => {


  const MySwal = withReactContent(Swal)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [formContainer, setFormContainer] = useState(false)
  const [updateContent, setUpdateContent] = useState(false)

  const handleFormContainer = (container_name) => {

    if (container_name === 'form-container') {
      setFormContainer(true);
      setUpdateContent(false);


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
        title: 'Do you want to remove this testimony?',
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
            'Testimony info has been removed.',
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
                          {updateContent ? ('Update Customer Testimony') : ('Add Customer Testimony')}
                        </p>
                        <button onClick={() => { handleFormContainer('list-container') }} className="btn btn-primary">View Testimonies</button>
                      </div>
                      <form autoComplete="off">

                        <div className="form-group">
                          <label
                            for="customer_name"
                            className="form-label"
                          >
                            Customer Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="customer_name"
                            id="customer_name"
                            placeholder="Customer Name"
                          />
                        </div>

                        <div className="form-group">
                          <label
                            for="customer-testimony"
                            className="form-label"
                          >
                            Customer Comments
                          </label>
                          <textarea
                            class="form-control"
                            id="customer_comment"
                            name='customer_comment'
                            rows="5"
                          ></textarea>
                        </div>
                        <div className='form-group form-btn'>
                          <button className="btn btn-primary" type="submit">
                            {updateContent ? ('Update') : ('Save')}
                          </button>
                        </div>

                      </form>

                    </div>
                  ) : (

                    // manage testimonies section
                    <div className="manage-dealers">
                      <div className="container-header">
                        <p>Customer Testimonies</p>
                        <button onClick={() => { handleFormContainer('form-container') }} className="btn btn-primary">Add New Testimony</button>
                      </div>


                      <div className="dealers-list">

                        <div className="empty-box">
                          <h3>No Testimony Added</h3>
                        </div>

                        {/* box list section */}

                        <div className="dealer-list-box testimony-box">

                          <div className="dealer-list-info">

                            <div className="dealer-list-profile">
                              <p className="name">Kayode Festus </p>
                              <p className="desc"> <i class="fa-solid fa-quote-left"></i>
                                <span>  Autodealer is nisi aliquip consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</span>
                                <i class="fa-solid fa-quote-right"></i></p>
                            </div>
                          </div>

                          <div className="dealer-action-buttons">
                            <p> <button onClick={() => onEdit()} className="btn btn-md btn-primary">Update <i class="fa-regular fa-pen-to-square"></i> </button> </p>
                            <p> <button onClick={() => onDelete()} className="btn btn-md btn-danger">Remove  <i class="fa-regular fa-trash-can"></i>  </button> </p>
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
        </div>
      )}
    </>
  );
}

export default Testimonials;