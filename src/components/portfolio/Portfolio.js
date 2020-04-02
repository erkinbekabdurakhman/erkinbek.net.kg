import React from 'react';
import './portfolio.css';

class Porftfolio extends React.Component {
    render(){
        return(
            <section className="projects">
                <div className="container">
                    <div className="counter">
                        <div className="row text-center">
                            <div className="col-md-4 counter-box">
                                <div className="icon-box">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <p className="counter">10</p>
                                    <p>Projects Completed</p>
                            </div>
                            <div className="col-md-4 counter-box">
                                <div className="icon-box">
                                    <i className="fa fa-code"></i>
                                </div>
                                <p className="counter">1000</p>
                                    <p>Lines of Code</p>
                            </div>
                            <div className="col-md-4 counter-box">
                                <div className="icon-box">
                                    <i className="fa fa-bug"></i>
                                </div>
                                <p className="counter">4000</p>
                                    <p>Bugs in code</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <h5>Alaman.kg</h5>
                                    <p>Alaman.kg is the platform which combine fans of Kyrgyz national horse games.
                                        You can order online horse equitments with delivery. And also you will be known
                                        nearest games which hold on in Kyrgyzstan.It is very usefull who interests to alaman ulak,
                                        leilek ulak, kokboru and horses.<br/>
                                        <a href="/#">Read more</a>
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <h5>Markdown</h5>
                                    <p> Markdown is developed by John Gruber. It allows you to write using an easy to read, easy to write plain text format. 
                                    Markdown is often used to format readme files, for writing messages in online discussion forums, and 
                                    to create rich text using a plain text editor. Implementations of Markdown are available for over
                                    a dozen programming languages.</p>
                                    <a href="/#">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                            <h3>The Canvas</h3>
                            <p>The Canvas API provides a means for drawing graphics via JavaScript and the HTML &lt;canvas&gt; element.
                                Among other things, it can be used for animation, game graphics, data visualization, photo manipulation,
                                and real-time video processing.The Canvas API largely focuses on 2D graphics.</p>
                            <a href="/#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <h5>Alaman.kg</h5>
                                    <p>Alaman.kg is the platform which combine fans of Kyrgyz national horse games.
                                        You can order online horse equitments with delivery. And also you will be known
                                        nearest games which hold on in Kyrgyzstan.It is very usefull who interests to alaman ulak,
                                        leilek ulak, kokboru and horses.<br/>
                                        <a href="/#">Read more</a>
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <h5>Markdown</h5>
                                    <p> Markdown is developed by John Gruber. It allows you to write using an easy to read, easy to write plain text format. 
                                    Markdown is often used to format readme files, for writing messages in online discussion forums, and 
                                    to create rich text using a plain text editor. Implementations of Markdown are available for over
                                    a dozen programming languages.</p>
                                    <a href="/#">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                            <h3>The Canvas</h3>
                            <p>The Canvas API provides a means for drawing graphics via JavaScript and the HTML &lt;canvas&gt; element.
                                Among other things, it can be used for animation, game graphics, data visualization, photo manipulation,
                                and real-time video processing.The Canvas API largely focuses on 2D graphics.</p>
                            <a href="/#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Porftfolio;