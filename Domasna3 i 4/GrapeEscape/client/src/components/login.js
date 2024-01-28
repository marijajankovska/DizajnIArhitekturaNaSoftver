import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../stylesheet/LoginPage.css';

class LoginManager {
  constructor() {
    this.email = '';
    this.password = '';
    this.error = '';
  }

  static _instance = null;

  static getInstance() {
    if (!this._instance) {
      this._instance = new LoginManager();
    }
    return this._instance;
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }

  setError(error) {
    this.error = error;
  }

  async handleSubmit() {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: this.email,
        password: this.password,
      });

      console.log('response.data.token', response.data.token);

      if (response.status === 200 && response.data.token) {
        // Authentication successful, update state or redirect
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        // Authentication failed, update error state
        this.setError(response.data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      this.setError('An unexpected error occurred');
    }
  }
}

function LoginForm() {
  const navigate = useNavigate();
  const loginManager = LoginManager.getInstance();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

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
                  <input
                      type="text"
                      className="form-control"
                      id="email-reg"
                      name="email"
                      value={loginManager.email}
                      onChange={(event) => loginManager.setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password-reg" className="form-label">
                    Password
                  </label>
                  <input
                      type="password"
                      className="form-control"
                      id="password-reg"
                      name="password"
                      value={loginManager.password}
                      onChange={(event) => loginManager.setPassword(event.target.value)}
                  />
                </div>
                <button onClick={() => loginManager.handleSubmit()} className="saveReviewButton">
                  Log in
                </button>
              </div>
              {loginManager.error && <p className="error-message">{loginManager.error}</p>}
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
