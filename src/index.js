// Importing React and ReactDOM

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navigation/Navbar.js';
import logo from "./images/briefly-logo3.svg";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js"
import Footer from './components/Footer/Footer.js'
import Contact from './components/Contact/Contact.js'

// Creating a react component

const image = {
    imgURL: logo,
}
const App = () => {
    return (
    <div>
        <Navbar img={image}/>
        <Header/>
        <Main/>
        <Contact/>
        <Footer/>
    </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

