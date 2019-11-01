// Importing React and ReactDOM

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import logo from "./images/briefly-logo3.svg"
import headerImg from "./images/homepage-bgpic.jpg"
import Header from "./components/Header";

// Creating a react component

const image  = {
    imgURL: logo,
    imgHeader: headerImg
}
const App = () => {
    return <div>
        <Navbar img={image}/>
        <Header />
    </div>
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

