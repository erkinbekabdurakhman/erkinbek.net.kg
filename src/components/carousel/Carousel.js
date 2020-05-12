import React from 'react';
import './carousel.css';
import icon10 from '../images/img10.png';
import icon12 from '../images/img12.png';


class Carousel extends React.Component{
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active slide-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Building Business Websites</h1>
                                    <p>It is important to let people to know who you are and 
                                        and what you do for them when they visit your website. I will create
                                        an interesting, memorable and engaging website with user
                                        friendliness interface.
                                    </p>
                                    <button type="button">Let's talk</button>
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
                                        such as classes overview, booking from mobile and important service updates, while
                                        enabling easy customer feedback and one-to-one chat. I will make a great looking,
                                        cross-platform app with using latest technology. 
                                    </p>
                                    <button type="button">Let's talk</button>
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
}
export default Carousel;