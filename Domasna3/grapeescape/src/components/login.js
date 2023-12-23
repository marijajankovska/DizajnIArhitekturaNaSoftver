import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheet/Authentication.css'
import {useAuth} from "../context/AuthContext";
import '../stylesheet/LoginPage.css'
function LoginForm(){
    const navigate = useNavigate()
    const {  authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn} = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoggedIn(true)
        navigate("/")
    };
    return(
        <div className="signup-container">
        <div className="login-container">
            <div className="card" style={{ width: '18rem' }}>
                 <div className="card-header">LOG IN</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} action="/auth/register" method="POST">
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
                        <button className="saveReviewButton" type={"submit"}>Log in</button>
                    </form>
                </div>
            </div>

            <Link  className='newAccLink' to="/signup">
                <div className='newAccLink'>Create New Account</div>
            </Link>
        </div>
        </div>
    );
}
export default LoginForm;