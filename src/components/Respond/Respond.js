import React from 'react';
import './respond.css'


const  Respond =  (props) => {
        return(
            <div className='text-center'>
                <div className="result">
                <h4>Summerized succesfully </h4>
                    <ul className="container float">
                        <div className="col-md-12">
                        <li className="item"> Compression rate : {props.rate}</li>
                        </div>
                        <div className="col-md-12">
                        <li className="item"> Words in original text : {props.words}</li>
                        </div>
                        <div className="col-md-12">
                            <li className="item"> Paragrahps in original text : {props.paragraph}</li>
                        </div>
                    </ul>
                </div>
            </div>
        )


};


export default Respond;