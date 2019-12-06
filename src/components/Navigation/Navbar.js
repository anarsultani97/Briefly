import React from 'react';
import './nav.css' ;
import '../../style/style.css'
const Navbar = props => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-lg py-3 bg-light shadow-lg">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src={props.img.imgURL} width={'100px'}/>
                    </a>

                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#header" className="nav-link">Home <span
                                className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">About us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;