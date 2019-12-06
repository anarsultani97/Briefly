import  React from 'react'
import './services.css'

class Services extends React.Component {
    render() {
        return (
            <section id="services" className="bg-boz">
                    <div className="container">
                        <div className="row mb-50 mt40">
                            <div className="col-md-6 offset-md-3">
                                <h2 className="alt-xett text-center">WHO IS BRIEFLY FOR ?</h2>
                                <p className="text-center alt-p">Summarize your text fast and easily</p>
                            </div>
                        </div>
                        <div className="row icon-editing">
                            <div className="col-md-4 service-item ">
                                <div className="text-center service-box  ">
                                    <a href="#"> <i className="fas fa-headset"></i> </a>
                                    <h3>Customer Support</h3>
                                    <p>Knowledge bases have been around for a while, and they are critical for SAAS platforms to provide customer support at scale. Still, users can sometimes feel overwhelmed when browsing help docs. Could multi-document summarization provide key points from across help articles and give the user a well rounded understanding of the issue?</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="text-center service-box">
                                    <a href="#"> <i className="fas fa-newspaper" aria-hidden="true"></i> </a>
                                    <h3>Newspaper</h3>
                                    <p>Many weekly newsletters take the form of an introduction followed by a curated selection of relevant articles. Summarization would allow organizations to further enrich newsletters with a stream of summaries (versus a list of links), which can be a particularly convenient format in mobile.</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="text-center service-box">
                                    <a href="#"> <i className="fas fa-user" aria-hidden="true"></i> </a>
                                    <h3>SMM</h3>
                                    <p>Companies producing long-form content, like whitepapers, e-books and blogs, might be able to leverage summarization to break down this content and make it sharable on social media sites like Twitter or Facebook. This would allow companies to further re-use existing content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row icon-editing">
                            <div className="col-md-4 service-item">
                                <div className="text-center service-box">
                                    <a href="#"> <i className="fas fa-book-open"></i> </a>
                                    <h3>Books & Literature</h3>
                                    <p>Google has reportedly worked on projects that attempt to understand novels. Summarization can help consumers quickly understand what a book is about as part of their buying process.</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="text-center service-box">
                                    <a href="#"> <i className="fas fa-desktop" aria-hidden="true"></i> </a>
                                    <h3>Media Monitoring</h3>
                                    <p>The problem of information overload and “content shock” has been widely discussed. Automatic summarizationpresents an opportunity to condense the continuous torrent of information into smaller pieces of information.</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="text-center service-box">
                                    <a href="#"> <i className="fas fa-file-contract"></i> </a>
                                    <h3>Interview Process</h3>
                                    <p>Large companies are constantly producing internal knowledge, which frequently gets stored and under-used in databases as unstructured data. These companies should embrace tools that let them re-use already existing knowledge. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
        )
    };
}
export default Services;