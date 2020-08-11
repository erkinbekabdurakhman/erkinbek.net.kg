import React from 'react';
import './carousel.css';
import icon10 from '../images/img10.png';
import icon12 from '../images/img12.png';
import icon14 from '../images/img14.png';

const Carousel = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active slide-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Developing websites</h1>
                                <p>It is important to let people to know who you are and 
                                    and what you do for them when they visit your website. I will create
                                    an interesting, memorable and engaging website with user
                                    friendliness interface.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src={icon10} alt="website" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item slider-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src={icon12} alt="mobile application" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1>Building Mobile Application</h1>
                                <p>With a mobile app, we could automate many processes,
                                    such as classes overview, booking from mobile and important
                                    service updates, while enabling easy customer feedback and 
                                    one-to-one chat. I will make a great looking, cross-platform app
                                    with using latest technology. 
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="carousel-item slider-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Prototyping UI / UX</h1>
                                <p>Prototyping tools allow designers and clients
                                    to collaborate better while being in the same 
                                    context rather than having conflicting perspectives. 
                                    The clients get a visual overview of what is actually 
                                    going to be made. It helps teams to build understanding, 
                                    to explore options and barriers that only become visible 
                                    when you build and test something.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src={icon14} alt="mobile application" />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;