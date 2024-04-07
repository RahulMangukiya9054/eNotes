import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import alertContext from '../context/alert/alertContext'
import progressContext from '../context/progress/progressContext'

const Signup = () => {

    document.title = "iNotebook - Signup";

    const host = process.env.REACT_APP_HOST;
    const [body, setBody] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate();

    const { showAlert } = useContext(alertContext)
    const { setProgress, setLoading } = useContext(progressContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${host}/api/user/add`
            setLoading(true)
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
                // Redirect to login page
                navigate('/login');
                showAlert("success", "Account created successfully!, Please Log in to access the services.")
            }
            setProgress(100)
            setLoading(false)

        } catch (error) {
            showAlert("danger", "User with this email already exist, Please try using a different Email!")
            setProgress(100)
            setLoading(false)
        }
    }

    const onChange = (e) => {
        setBody({ ...body, [e.target.name]: e.target.value })
    }

    return (
        <div className='py-4'>
            <h2 className='display-4 text-center'>Create an Account</h2>
            <div className="container-fluid h-custom my-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Error fetching..." />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            {/* Name input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input type="text" id="name" name='name' className="form-control"
                                    placeholder="Enter Full Name" value={body.name} onChange={onChange} required />
                            </div>

                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email address</label>
                                <input type="email" id="email" name='email' className="form-control"
                                    placeholder="Enter a valid email address" value={body.email} onChange={onChange} required />
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" id="password" name='password' className="form-control"
                                    placeholder="Enter password" value={body.password} onChange={onChange} required />
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary"
                                    style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>Sign up</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="../login"
                                    className="link-danger">Log in</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

