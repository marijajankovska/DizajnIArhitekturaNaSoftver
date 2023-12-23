import '../stylesheet/Contact.css'
import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };


    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

    };

    return (
        <div className="background">
            <div className="container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                        </div>
                        <div className="screen-body-item">
                            <form className="app-form" onSubmit={handleSubmit}>
                                <div className="app-form-group">
                                    <input
                                        className="app-form-control"
                                        placeholder="NAME"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="app-form-group">
                                    <input
                                        className="app-form-control"
                                        placeholder="EMAIL"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>

                                <div className="app-form-group message">
                                    <input
                                        className="app-form-control"
                                        placeholder="MESSAGE"
                                        value={message}
                                        onChange={handleMessageChange}
                                    />
                                </div>
                                <div className="app-form-group buttons">
                                    <button className="app-form-button" type="button">CANCEL</button>
                                    <button className="app-form-button" type="submit">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="credits">
                    {/* ...Credits */}
                </div>
            </div>
        </div>
    );
}

export default Contact;
