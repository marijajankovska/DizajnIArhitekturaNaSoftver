import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../stylesheet/NavBar.css"
import { useAuth } from "../context/AuthContext";
const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()
    const { authUser,
        setAuthUser,
    } = useAuth()
    const logIn = (event) => {
        navigate('/login')
    }
    const logOut = () => {
        localStorage.removeItem('token')
        navigate("/")
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token)
    }, [navigate])
    return (
        <nav >
            <Link to="/" id="logo">GE</Link>
            <ul className="Navigation">
                <li>
                    <Link className="navitem" to="/">Home</Link>
                </li>
                <li>
                    <Link className="navitem" to="/about">About</Link>
                </li>
                <li>
                    <Link className="navitem" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className="navitem" to="/map">Map</Link>
                </li>

                {isLoggedIn
                    ? <li><Link to="" className="navitem" onClick={logOut}>Logout</Link></li>
                    : <li><Link to="/login" className="navitem" onClick={(event) => { logIn(event) }}>Login</Link></li>
                }

            </ul>

        </nav>
    );
};

export default NavBar;
