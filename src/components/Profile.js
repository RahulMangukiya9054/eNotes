import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import progressContext from '../context/progress/progressContext'
import alertContext from '../context/alert/alertContext'

const Profile = () => {

    document.title = "iNotebook - Profile";

    const host = process.env.REACT_APP_HOST;
    const [profile, setProfile] = useState({})
    const { showAlert } = useContext(alertContext)
    const { setProgress, loading, setLoading } = useContext(progressContext)

    const fetchProfile = async () => {
        // API Call
        try {
            setLoading(true)
            const url = `${host}/api/user/getuser`
            setProgress(30)
            const res = await axios.get(url, {
                headers: {
                    'authorization': localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            }
            );
            // console.log('res====>', res)
            setProgress(70)

            if (res.data.type === "Success") {
                let d = new Date(res.data.data.createdAt);
                let date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`

                const profileInfo = {
                    id: res.data.data.id,
                    name: res.data.data.name,
                    email: res.data.data.email,
                    createdAt: date
                }
                setProfile(profileInfo)
            }
            setProgress(100)
            setLoading(false)

        } catch (error) {
            setProgress(100)
            showAlert("danger", "Something wents wrong, Please try again later!")
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile();
        // eslint-disable-next-line
    }, [])


    return (
        <div className="container d-flex justify-content-center align-item-center my-5">
            {loading ? "" : <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg" className="img-fluid rounded-start h-100 w-100" alt="Loading..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title mb-4">User Information</h3>
                            <p className="card-text"><strong>Name : </strong>{profile.name}</p>
                            <p className="card-text"><strong>Email : </strong>{profile.email}</p>
                            <p className="card-text"><strong>iNotebook member since : </strong>{profile.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Profile
