import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Map from './components/Map';
import NavigationBar from './components/NavBar';
import LoginForm from "./components/login"
import RegisterForm from "./components/signup";
import StarReview from "./components/StarReview";
import {AuthProvider} from "./context/AuthContext";


function App() {
    return (
        <Router>
            <AuthProvider>
            <NavigationBar/>

            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/map" element={<Map/>}/>
                <Route path="/signup" element={<RegisterForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/starreview" element={<StarReview/>}/>
            </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;

