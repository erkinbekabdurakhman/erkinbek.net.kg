import React from 'react';
import './aboutme.css';
import icon from '../images/out-box.svg';
import icon1 from '../images/brainstorm.svg';
import icon2 from '../images/lightbulb.svg';
import icon3 from '../images/customer-service.svg';
import icon4 from '../images/innovat.svg';
import icon5 from '../images/meeting.svg';

const About = () => {
    return(
        <>
            <section className="container" >
                <h3>Principles</h3>
                    <div className="row">
                        <div className="col-md-4 about-card">
                            <img src={icon} alt="out-box svg" />
                                <h5>«Creativity»</h5> 
                            <p>Creativity is to think “Out of the box”. The ability to be surprised at the new and
                                turn this surprise into innovation in services and business. Concepts, grammar, ideas, 
                                a computer, the Internet, music, films and new biotechnologies - once all these were
                                dreams, but human energy turned dreams into reality. The world that we invent and 
                                create changes all the time - every day and every second some kind of fantasy
                                becomes a reality.I am looking for people who can see even the smallest changes
                                that can turn into whole new areas of business. I need people who turn dreams into reality.
                            </p>
                        </div>
                        <div className="col-md-4 about-card">
                            <img src={icon1} alt="brainstorm svg" />
                            <h5>«Will»</h5>  
                            <p>
                                Will - The ability to make choices and take responsibility.I understand responsibility 
                                as the ability to perform real Actions (with a capital letter) and be responsible for
                                the choice made. I am looking for partners who can make choices. Since when making
                                a decision, long-term fluctuations in the choice of equivalent (or seeming as such)
                                alternatives can generally ruin the matter.I am looking for people who are able
                                to fight to the last in any, even the most difficult situation. The resigned
                                always loses. Persistently trying to solve the problem gets a chance.</p>
                        </div>
                        <div className="col-md-4 about-card">
                            <img src={icon2} alt="lightbulb svg" />
                            <h5>«Reasonable Doubt»</h5>  
                            <p>
                                Reasonable doubt - the ability to see from a different point of view, 
                                subject to reasonable doubt, using the facts. We make the most efficient 
                                use of all our capabilities in order to save time and money of the client
                                and the company, while maintaining the quality of our work. I am sincerely 
                                interested in creating strong and long-term relationships with customers and 
                                do not compromise with my ethics for profit.
                                </p>
                        </div>  
                    </div>
            </section>
            <section className="container">
                <h3>Philosophy</h3>
                    <div className="row">
                        <div className="col-md-4 about-card">
                            <img src={icon3} alt="customer-service" />
                            <h5>«Customer Orientation»</h5>
                            <p>I am really interested in my Clients, considering that the Client is the most 
                                important person to me. I see satisfaction of my needs within the satisfaction of 
                                customer needs. Globally, I believe that the interest of the company lies within the 
                                interest of society and the country. I individualize my work, opening the most accurate
                                definition of quality criteria for each client, and I try to even surpass them a little.</p>
                        </div>
                        <div className="col-md-4 about-card">
                            <img src={icon4} alt="innovation" />
                            <h5>«Innovation»</h5>
                            <p>I value technology that allows you to create new things. I catch the new, I am surprised 
                                at the new and apply it in my work. I am focused on the active use of the most modern "know-how",
                                increasing my effectiveness. I open up new knowledge and create new markets, benefiting my country.
                            </p>
                        </div>
                        <div className="col-md-4 about-card">
                            <img src={icon5} alt="meeting svg" />
                            <h5>«Liberalism»</h5>
                            <p>I value the ability to reach an agreement on the basis of consensus, agreeing on a common meaning of
                                concepts and taking into account the maximum number of nuances, and then follow this agreement, just
                                like the consent of the parties, fulfilling it to the end. I welcome the “supremacy of the contract”,
                                creating freedom for inspiration and supporting the diversity and unique distinctiveness of my internal partners. 
                            </p>
                        </div>
                    </div>    
            </section>
        </>
    )
}

export default About;