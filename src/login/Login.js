import React, {useState} from 'react';
import {Formik} from 'formik';
import './login.css'
import {userLogin} from "../utils/ApiUtils";

const Login = (props) => {
    const [passwordInputType, setPasswordInputType] = useState("password")
    return (
        <div className="baseLayer">
            <h1 className="header">Login</h1>
            <Formik
                initialValues={{email: "", password: ""}}
                onSubmit={(values, {resetForm}) => {
                    userLogin(values.email, values.password)
                        .then(() => {
                            props.history.push("/shop")
                            resetForm();
                        })
                        .catch(() => {
                            alert("Error while logging in!");
                        });
                }}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form className="body" onSubmit={handleSubmit}>

                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Enter your email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email && touched.email
                                        ? "text-input error"
                                        : "text-input"
                                }
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}

                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                placeholder="Enter your password"
                                type={passwordInputType}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.password && touched.password
                                        ? "text-input error"
                                        : "text-input"
                                }
                            />

                            <a className="show"
                               onClick={() => setPasswordInputType(passwordInputType === "password" ? "text" : "password")}>
                                Show password
                            </a>
                            <button className="but"
                                    type="button"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </button>
                            <button className="but" type="submit" disabled={isSubmitting}>
                                Log in
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>);
}

export default Login;