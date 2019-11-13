import React from 'react';


class Contact extends React.Component {
    render() {
        return (
            <section id='contact'>
                <div className="container-fluid contact-form">
                    {/* <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div> */}
                    <form method="post">
                        <h3>Contact Us</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Name *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmail" className="form-control" placeholder="Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Phone Number *" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea name="txtMsg" className="form-control" placeholder="Message *" style={{ height: '150px' }}></textarea>
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