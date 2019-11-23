import React from 'react';
import axios from 'axios';
import './contact.css'


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '' ,
            contact: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
         name: event.target.value
        })
    };
    handleEmailChange = (event) => {
        this.setState( {
            email : event.target.value
    })
    };
    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    };

    handleContactChange = (event) => {
        this.setState({
            contact: event.target.value
        })
    };



    handleSubmit = (event) => {
       event.preventDefault();

    };

    render() {
        //using React to create contact part
        return (
            <section id='contact'>
                <div className="container-fluid contact-form">
                    <form onSubmit={this.handleSubmit}  >
                        
                        <h3>Contact Us</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input required type="text" name="name" className="form-control" onChange={this.handleNameChange}  value={this.state.name} placeholder="Name *" />
                                </div>
                                <div className="form-group">
                                    <input required type="email" name="email"  value={this.state.email} className="form-control"  onChange={this.handleEmailChange} placeholder="Email *" />
                                </div>
                                <div className="form-group">
                                    <input  type="text" name="contact"   className="form-control" value={this.state.contact} onChange={this.handleContactChange}  placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea name="message" required className="form-control"  value={this.state.message} onChange={this.handleMessageChange} placeholder="Message *" style={{ height: '150px' }} />
                                </div>
                            </div>
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-md-6 offset-md-3 form-group text-center">
                                        <input type="submit" name="btnSubmit" className=" btn btn--blue btn--animated" value="Send Message" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}


export default Contact;