import React from 'react';

// import { Container } from './styles';

function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="logo-apple"></ion-icon>
                        </span>
                        <span className="title">Brand Name</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Dashborard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="title">Message</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span className="title">Password</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="log-in-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
