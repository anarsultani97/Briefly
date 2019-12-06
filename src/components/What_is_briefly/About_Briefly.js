import React from 'react'
import "./about_briefly.css"


class About_Briefly extends React.Component{
    render() {
        return(
          <section className='about-us' id='about-us'>
            <div className='container-fluid about-div'>
                <div className='row'>
                    <div className="col-md-6 offset-md-3 col-xs-12 text-center">
                        <div className="col-md-8 offset-md-2">
                      <h2 className='section-title '>Just Focus On Important Facts and Ideas</h2>
                        </div>
                        <p className='subtitle'>To help you <span>summarize</span> and analyze your argumentative texts , articles, scientific texts, history texts, or comments works well structured,
                            <span>Briefly</span> offers a "Text Summarizer": an educational tool that locates and returns the ideas and important facts
                            of your documents. Summarize in one click, go to the essentials or read diagonally to
                            then quickly interpret your texts and develop your syntheses.
                            You can download your summerized text as .txt file after summarizing
                        </p>
                    </div>
                </div>
            </div>
          </section>


        )
    }
}

export default About_Briefly;