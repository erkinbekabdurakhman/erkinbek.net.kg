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
                                <p className="counter">6</p>
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
                                <p className="counter">2000</p>
                                    <p>Bugs in code</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <h5>Alaman.kg</h5>
                                    <p>Alaman.kg is the platform which combine fans of Kyrgyz
                                        national horse games.You can order online horse equitments
                                        with delivery. And also you will be known nearest games
                                        which hold on in Kyrgyzstan.It is very usefull who 
                                        interests to alaman ulak,leilek ulak, kokboru and horses.</p><br/>
                                    <a href="/#">Read more</a>
                                    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <h5>Kundoluk landing page</h5>
                                    <p>The automated information system "Kundoluk" provided by highly
                                        qualified and experienced developers in the Kyrgyz Republic
                                        to improve the quality of education and ensure equal access
                                        for students and parents. This system is available both
                                        through modern browsers and through free applications.
                                        The application notifies about current events
                                        in schools.</p>
                                    <a href="/#">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                            <h3>Super Snake</h3>
                            <p>Warning: This game was written in JavaScript by using Object Oriented Programming.
                                To control behavior of Snake use W - to turn up, A - to turn left, S - to turn down,
                                D - to turn right. Game was written in a purpose of learning JS.
                                It is possible only laptop browsers.Be shure that you switched your keybord into EN.</p>
                            <a href="/#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                            <h5>Buzzle</h5>
                            <p>Buzzle is simple clone of Twitter. Here every user can register and login.
                                The administrator can manage all functionalities. Not only every user can
                                "buzz", but also can edit and delete posted message. Used technologies:
                                HTML, CSS, Express.js, MySQL, Bootstrap, JQuery.</p>
                                <a href="/#">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <h5>Re-Store</h5>
                                    <p>Re-Store is simple page of online bookstore. Here also buttons
                                        and table can change dinamically by the action of user. Here
                                        I used Redux library. The style of page supported by Bootstrap
                                        elements. The most page of e-commerce websites begin with
                                        such kind of functionalities.</p>
                                    <a href="/#">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                            <h3>Star DB</h3>
                            <p>Star Wars Data Base simple React App. The original code
                                was developed by Yura Bura. He is my online mentor at Udemy.
                                I have got his React Redux course. I tried to write it by
                                myself in a purpose of learning. The production code
                                was deployed by PAATH platform Netlify.</p>
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