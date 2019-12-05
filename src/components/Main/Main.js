import React from 'react';
import './main.css';
import axios from "axios";
import Respond from "../Respond/Respond";


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.realFileBtn =
            React.createRef();
        this.customTxt =

            React.createRef();
        this.customBtn
            =
            React.createRef();
        this.message =
            React.createRef();
        this.state = {
            message : '',
            data: "" ,
            obj: {},
            summarizeClicked: false
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();
            this.setState(
                {
                    summarizeClicked : true
                }
            )
        const  textObj = {
            text : this.state.message
        };
         await axios.post('http://localhost:8080/api/data', textObj)
            .then(res=> {
                console.log(res.data)
                this.setState({
                    obj: res.data,
                    data: res.data.text
                })
            });

        console.log(this.state.data)

    }


    UploadClick = () => {
        const realFile = this.realFileBtn.current;
        realFile.click();
    };


        ShowUploadFileName = async (event) => {
            const realFileBtn = this.realFileBtn.current;
            const customTxt = this.customTxt.current;
            const fileName = event.target.files[0].name;

            let file = event.target.files[0];

            let reader = new FileReader();
            //reading uploaded file text
            let data = reader.readAsText(file);

            reader.onload = (event) => {
                this.setState({
                    message: event.target.result,
                    data: event.target.result
                })
            }


            if (realFileBtn.value) {
                //display file name

                customTxt.innerHTML = fileName;

            } else {
                customTxt.innerHTML = "No file chosen, yet.";
            }
        };



    textChangeHandler  = (event) =>{
        this.setState({
            message: event.target.value,
            data: event.target.value
        })
    }

    render() {
        return (
            <section className="main">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-8 offset-md-2 col-sm-8 col-xs-8 text-center">
                            <input type="file" id="upload_file" hidden="hidden" ref={this.realFileBtn}
                                   onChange={this.ShowUploadFileName} accept='.txt'/>
                            <button type="button" id="upload_button" className='btn--animated' ref={this.customBtn}
                                    onClick={this.UploadClick}>Upload a file
                            </button>

                            <span id="uploaded_file_text" ref={this.customTxt}>No file chosen, yet.</span>
                            <p className='mt-3'>You can only upload files <b>(.txt)</b> </p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center text-center my-5">
                        <div className="col-lg-8">
                            <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                {
                                    this.state.summarizeClicked ?
                                    <Respond
                                     rate = {this.state.obj.compressionRate}
                                     words = {this.state.obj.nofWordsSummary}
                                     summerized_text = {this.state.obj.text}
                                     /* paragraph = {this.state.obj.nofParagraphSummary} */
                                    />
                                    :
                                        <div></div>

                                }
                                <textarea placeholder='Summerize your text' name="summarize"
                                          className='form-control rounded-lg' rows={15} id="textArea" ref={this.message}  onChange={this.textChangeHandler} value={this.state.data} />
                                <button type='submit' className="btn btn-lg btn-outline-light btn--green btn--animated"
                                        href="#"
                                        role="button">Summarize
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

}

export default Main