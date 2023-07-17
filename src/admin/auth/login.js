import React, { useState } from "react";
import "./auth.css";
import AuthHeader from "./auth-header";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;


    const onSubmit = async (e) => {
        e.preventDefault();
        navigate("/admin/dashboard/home");
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
                                    <h5 className="title">Login your account </h5>
                                </div>
                                <div className="form-group">
                                    <label className="label-primary">Email </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        data-inputmask="'alias': 'email'"
                                        onChange={onChange}
                                        required={true}
                                        className="form-control"
                                        placeholder="Your Email Address"
                                        autoComplete="email"
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
                                        placeholder="Your Password"
                                        autoComplete="current-password"
                                    />
                                </div>

                                <div className="form-group">
                                    <button

                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>
                                </div>

                                <p className="p-create">

                                    <Link className="link" to="/admin/register">
                                        Create Account
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

export default AdminLogin;
