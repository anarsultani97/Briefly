import React from 'react';
import './nav.css' ;
import '../../style/style.css'
const Navbar = props => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg py-3 navbar-light bg-light shadow-lg">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        <img src={props.img.imgURL} width={'100px'}/>
                    </a>

                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

                    <div id="navbarSupportedContent" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a href="#" class="nav-link">Home <span
                                class="sr-only">(current)</span></a></li>
                            <li class="nav-item"><a href="#contact" class="nav-link">Contact Us</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;