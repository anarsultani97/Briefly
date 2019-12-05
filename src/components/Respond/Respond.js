import React from 'react';
import './respond.css'


class  Respond extends React.Component {

    download(filename,text){
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    handleClick = (event) => {
            this.download('summerized', this.props.summerized_text)
        }


    render(){
        return (
            <div className='text-center'>
                <div className="result">
                    <h4>Summerized succesfully </h4>
                    <ul className="container float">
                        <div className="col-md-12">
                            <li className="item"> Compression rate :  <b>{this.props.rate}</b> </li>
                        </div>
                        <div className="col-md-12">
                            <li className="item"> Words in summarized text: <b>{this.props.words}</b> </li>
                        </div>
                    </ul>
                    <button onClick={this.handleClick}
                            className="btn btn-lg btn-outline-light btn--white download"
                            role='button'
                            >
                        Download as .txt
                    </button>
                </div>
            </div>
        )
    };
}

export default Respond;