import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">REACT-REDUX</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item nav-link ">
                                <Link to="/test">The Lesson</Link>
                            </li>
                            <li className="nav-item nav-link ">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-item nav-link ">
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
