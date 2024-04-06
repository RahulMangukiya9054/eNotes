import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import alertContext from '../context/alert/alertContext';
import progressContext from '../context/progress/progressContext';

const Login = () => {

    document.title = "iNotebook - Login";

    const host = process.env.REACT_APP_HOST;
    const [body, setBody] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const { showAlert } = useContext(alertContext)
    const { setProgress } = useContext(progressContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${host}/api/user/login`;

            setProgress(30)
            const res = await axios.post(url, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
            // console.log('res====>', res)
            setProgress(70)
            if (res.data.type === "Success") {
                // Redirect to home page
                let token = res.data.data.authToken[0].token;
                localStorage.setItem("token", token)
                showAlert("success", "Logged in Successfully!")
                navigate('/');
            }
            setProgress(100)

        } catch (error) {
            showAlert("danger", "Invalid Credentials!")
            setProgress(100)
            // console.log('Error:', error.message);
        }
    }

    const onChange = (e) => {
        setBody({ ...body, [e.target.name]: e.target.value })
    }

    return (
        <div className='py-4'>
            <h2 className='display-4 text-center'>Log in to iNotebook</h2>
            <div className="container-fluid h-custom my-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Error fetching..." />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email address</label>
                                <input type="email" id="email" name='email' value={body.email} className="form-control"
                                    placeholder="Enter a valid email address" onChange={onChange} required />
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" id="password" name='password' value={body.password} className="form-control"
                                    placeholder="Enter password" onChange={onChange} required />
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary"
                                    style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="../signup" className="link-danger">Sign up</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
