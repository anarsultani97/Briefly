import React from 'react';
import './main.css';


class Main extends React.Component {
    render() {
        return (
            <section className="main">
                <div className="container ">
                    <div className="row align-items-center ">
                        <div className="col-lg-8 offset-md-2 col-sm-8 col-xs-8 text-center">
                            <input type="file" id="upload_file" hidden="hidden" ref={this.realFileBtn}
                                   onChange={this.ShowUploadFileName}/>
                            <button type="button" id="upload_button" className='btn--animated' ref={this.customBtn}
                                    onClick={this.UploadClick}>Upload a file
                            </button>

                            <span id="uploaded_file_text" ref={this.customTxt}>No file chosen, yet.</span>
                            <p className='mt-3'>You can only upload files (.txt, .docx , .pdf)</p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center text-center my-5">
                        <div className="col-lg-8">
                            <div className="form-group">
                                <textarea placeholder='Summerize your text' name="summarize"
                                          className='form-control rounded-lg' rows={15} id="textArea"/>
                                <button type='submit' className="btn btn-lg btn-outline-light btn--green btn--animated"
                                        href="#"
                                        role="button">Summarize
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }


    constructor(props) {
        super(props);
        this.realFileBtn =
            React.createRef();
        this.customTxt =

            React.createRef();
        this.customBtn
            =
            React.createRef();
    }


    UploadClick = () => {
        const realFile = this.realFileBtn.current;
        realFile.click();
    };


    ShowUploadFileName = () => {
        const realFileBtn = this.realFileBtn.current;
        const customTxt = this.customTxt.current;

        if (realFileBtn.value) {
            customTxt.innerHTML = realFileBtn.value.match(
                /[\/\\]([\w\d\s\.\-\(\)]+)$/
            )[1];
        } else {
            customTxt.innerHTML = "No file chosen, yet.";
        }
    };
}

export default Main