import React from 'react';
import '../stylesheet/Authentication.css';

const RegisterForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="signup-container mt-4 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">REGISTER</div>
                <div className="card-body">
                    <form action="/auth/register" method="POST" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name-reg" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="name-reg" name="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email-reg" className="form-label">
                                Email
                            </label>
                            <input type="text" className="form-control" id="email-reg" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password-reg" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password-reg" name="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password-conf-reg" className="form-label">
                                Confirm Password
                            </label>
                            <input type="password" className="form-control" id="password-conf-reg" name="password-confirm" />
                        </div>

                        <button  type="submit" className="btn saveReviewButton btn-primary">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default RegisterForm;
