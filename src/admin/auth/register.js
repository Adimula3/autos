import React, { useState } from "react";
import "./auth.css";
import AuthHeader from "./auth-header";
import { Link, useNavigate } from "react-router-dom";


const AdminRegister = () => { 
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        adminRole: "",
    });
    const { fullName, email, password } = formData;
    const navigate = useNavigate();

    const onSubmit = async (e) => {

        e.preventDefault();
        navigate("/admin/login");
    };

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <>
            <AuthHeader />
            <div className="admin-container">
                <div className="row justify-content-center">
                  

                    <div className="col-md-5">
                        <div className="auth-form">
                            <form onSubmit={onSubmit} autoComplete="on">
                                <div className="form-header">
                                    <h5 className="title">Create your account </h5>
                                </div>

                                <div className="form-group">
                                    <label className="label-primary">Full Name </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={fullName}
                                        onChange={onChange}
                                        required={true}
                                        maxLength={100}
                                        className="form-control"
                                        autoComplete="full-name"
                                        placeholder="Your Full Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="label-primary">Email </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={onChange}
                                        required={true}
                                        className="form-control"
                                        autoComplete="email"
                                        placeholder="Your Email Address"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="label-primary">Password </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={onChange}
                                        required={true}
                                        className="form-control"
                                        autoComplete="new-password"
                                        placeholder="Your Password"
                                    />
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-md btn-primary"
                                    >
                                        Create Account
                                    </button>
                                </div>

                                <p className="p-create">
                                    <Link className="link" to="/admin/login">
                                        Login to account
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminRegister;
