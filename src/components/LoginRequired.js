import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import "../styles/LoginRequired.css"

const LoginRequired = () => {

    document.title = `eNotes - Login Required`

    const open = useRef(null)
    const close = useRef(null)

    useEffect(() => {
        open.current.click();
    }, [])

    const handleLogIn = () => {
        close.current.click();
    }

    return (
        <>
            <button type="button" ref={open} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login Required</h1>

                        </div>
                        <div className="modal-body">
                            <p>Please login to continue with eNotes.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={close} className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                            <Link className="btn btn-primary" to="../login" role="button" onClick={handleLogIn}>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRequired
