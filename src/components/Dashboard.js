import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <h1 className="display-4 text-center mb-3">Welcome to eNotes</h1>
                    <p className="lead text-center mb-4">
                        Your Personal Space for Thoughts, Ideas, and Reminders
                    </p>
                    <div className="card text-dark bg-secondary-emphasis mb-3 text-center">
                        <div className="card-header">Start Here</div>
                        <div className="card-body">
                            <h5 className="card-title">Ready to Capture Your First Idea?</h5>
                            <p className="card-text">Click below and let your creativity flow without boundaries.</p>
                            <div className="text-center">
                                <Link to="../home" className="btn btn-primary">Add Notes</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="h4 card-title">Why Choose eNotes?</h2>
                            <p>Discover why eNotes is the perfect place to capture and organize your thoughts, ideas, and reminders:</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Ease of Use:</strong> Intuitive design focuses on user experience.</li>
                                <li className="list-group-item"><strong>Secure & Private:</strong> End-to-end encryption keeps your notes safe.</li>
                                <li className="list-group-item"><strong>Access Anywhere:</strong> Your notes are synced across all devices.</li>
                                <li className="list-group-item"><strong>Fully Featured:</strong> From creating to organizing, all in one place.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-5">
                        <h2 className="h4 mb-3">Get Started Now</h2>
                        <div className="list-group">
                            <Link to="../signup" className="list-group-item list-group-item-action"><strong>Create an Account:</strong> Sign up for eNotes to secure and personalize your experience.</Link>
                            <Link to="../login" className="list-group-item list-group-item-action"><strong>Log In:</strong> Access your personalized dashboard and see what's new or pending.</Link>
                            <Link to="../home" className="list-group-item list-group-item-action"><strong>Add Your First Note:</strong> Click on this link and let the creativity flow.</Link>
                        </div>
                    </div>

                    <footer className="text-center mt-5">
                        <p>Join the eNotes Community</p>
                        <p>Sign Up and become a part of the eNotes family.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
