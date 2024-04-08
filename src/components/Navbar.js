import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import alertContext from '../context/alert/alertContext';

const Navbar = () => {

    let location = useLocation()
    const navigate = useNavigate();
    const { showAlert } = useContext(alertContext)

    const handleHome = () => {
        if (localStorage.getItem("iNotebook-tkn")) {
            navigate("/home");
        }
        else {
            navigate("/loginrequire")
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem("iNotebook-tkn")
        showAlert("success", "Log out Successfully!")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{zIndex: "5"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="./">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="./home" onClick={handleHome}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="./about">About</Link>
                        </li>
                    </ul>
                    {localStorage.getItem("iNotebook-tkn") ? <form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="./profile" role="button"><i className="fa-regular fa-user" title='Profile'></i></Link>
                        <Link className="btn btn-danger mx-1" to="./login" role="button" onClick={handleLogOut}>Log out</Link>
                    </form> : <form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="./login" role="button">LogIn</Link>
                        <Link className="btn btn-primary mx-1" to="./signup" role="button">SignUp</Link>
                    </form>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
