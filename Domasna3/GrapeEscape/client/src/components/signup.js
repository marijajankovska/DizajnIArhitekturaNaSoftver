import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheet/Authentication.css';
import axios from 'axios';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // // Additional client-side validation if needed
        // if (password !== passwordConfirm) {
        //     setError('Password and Confirm Password do not match');
        //     return;
        // }

        try {
            const response = await axios.post('http://localhost:5000/api/register', {email, password});

            if (response.status == 200) {
                // Registration successful, redirect to home page or login page
                navigate('/login'); // Redirect to home page
            } else {
                // Registration failed, update error state
                setError(response.data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An unexpected error occurred');
        }
    };

    return (
        <div className="signup-container mt-4 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">REGISTER</div>
                <div className="card-body">
                    <div>
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
                            <input type="text" className="form-control" id="email-reg" name="email" value={email} onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password-reg" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password-reg" name="password" value={password} onChange={event => setPassword(event.target.value)}/>
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor="password-conf-reg" className="form-label">
                                Confirm Password
                            </label>
                            <input type="password" className="form-control" id="password-conf-reg" name="password-confirm" />
                        </div> */}

                        <button onClick={handleSubmit} className="btn saveReviewButton btn-primary">
                            Register
                        </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
