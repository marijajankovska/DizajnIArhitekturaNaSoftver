import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheet/LoginPage.css';
import axios from 'axios';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  useEffect(()=>{
    if(localStorage.getItem('token')){
        navigate('/')

    }
  }, [navigate])


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {email, password});

      console.log('response.data.token', response.data.token)

      if (response.status == 200 && response.data.token) {
        // Authentication successful, update state or redirect
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        // Authentication failed, update error state
        setError(response.data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="signup-container">
      <div className="login-container">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">LOG IN</div>
          <div className="card-body">
            <div>
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
                <input type="password" className="form-control" id="password-reg" name="password" value={password} onChange={event => setPassword(event.target.value)} />
              </div>
              <button onClick={handleSubmit} className="saveReviewButton" >
                Log in
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>

        <Link className="newAccLink" to="/signup">
          <div className="newAccLink">Create New Account</div>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
