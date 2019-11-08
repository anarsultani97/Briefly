// Importing React and ReactDOM

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import logo from "./images/briefly-logo3.svg";
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from './components/Footer'

// Creating a react component

const image = {
    imgURL: logo,
}
const App = () => {
    return <div>
        <Navbar img={image}/>
        <Header/>
        <Main/>
        <Footer/>


    </div>
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

