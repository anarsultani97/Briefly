import React from 'react';
import './header.css' ;
const Header = props => {
    return (
        <div className="jumbotron jumbotron-fluid ">
            <div className="container">
                <div className="row">
                    <div className='col-sm-12 col-md-8 offset-md-2 col-xs-12 text-center'>
                        <h2 className="display-4"><b>Summarize your articles.
                            Save your time!</b></h2>
                        <p className="lead">
                            <a className="btn btn-lg btn-outline-light btn--white btn--animated" href="#" role="button">Click
                                to summarize</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Header;

