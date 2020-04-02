import React from 'react';
import './skills.css';
import icon from '../images/html-logo.png';
import icon1 from '../images/css-logo.png';
import icon2 from '../images/js-logo.png';
import icon3 from '../images/sql-logo.png';
import icon4 from '../images/testing-logo.png';
import icon5 from '../images/react-logo.png';

class Skills extends React.Component {
    render(){
        return(
            <>
            <section className="container" >
                <h3>Top Skills</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <img id="html-logo" src={icon} alt="out-box" />
                                <h5>HTML</h5> 
                            <p>As a Web Developer I understand the basics of coding and markup language. HyperText Markup 
                                Language (HTML) is the standard of all markup languages.HTML forms practically every web page 
                                on the Internet as we know it. How a website functions depends on the way a developer writes 
                                the HTML.But for your website to actually display as a website, you’ll rely on CSS.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={icon1} alt="brainstorm" />
                            <h5>CSS</h5>  
                            <p>
                                Cascading Style Sheets (CSS) interpret documents written in a markup language. They’re a
                                more stylized presentation of the HTML language.CSS also describes how an HTML document 
                                will look visually as a website. It lays the bricks for a website’s font, colors, and 
                                overall layout.Think of it this way: HTML builds the skeleton of a website. CSS gives
                                the website its style and look.The most basic web developer skills call for a mastery 
                                of HTML and CSS.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={icon2} alt="lightbulb" />
                            <h5>JavaScript</h5>  
                            <p>
                                JavaScript is a higher level programming language. It makes websites more interactive and functional.
                                It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side
                                script to interact with the user and make dynamic pages. It is an interpreted programming language
                                with object-oriented capabilities.Client-side JavaScript is the most common form of the language.
                                The script should be included in or referenced by an HTML document for the code to be interpreted
                                by the browser.It means that a web page need not be a static HTML, but can include programs
                                that interact with the user, control the browser, and dynamically create HTML content.
                            </p>
                        </div>  
                    </div>
            </section>
            <section className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img id="mysql-logo" src={icon3} alt="customer-service" />
                            <h5>Data Base</h5>
                            <p>
                                <b>MySQL</b> is a relational database management system based on SQL – Structured Query 
                                Language. The application is used for a wide range of purposes, including data warehousing,
                                e-commerce, and logging applications. The most common use for mySQL however, is for the
                                purpose of a web database. <b>MongoDB</b> is an open source database management system
                                (DBMS) that uses a document-oriented database model which supports various forms 
                                of data. ... Instead of using tables and rows as in relational databases, the MongoDB
                                    architecture is made up of collections and documents.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={icon4} alt="innovations" />
                            <h5>Testin Fundamentals</h5>
                            <p>
                                <b>Unit Testing</b> is a level of software testing where individual units/ components
                                of a software are tested. The purpose is to validate that each unit of the software
                                performs as designed. A unit is the smallest testable part of any software. 
                                It usually has one or a few inputs and usually a single output. In procedural
                                programming, a unit may be an individual program, function, procedure, etc.
                                In object-oriented programming, the smallest unit is a method, which may belong 
                                to a base/ super class, abstract class or derived/ child class.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={icon5} alt="meeting" />
                            <h5>Framework Review</h5>
                            <p>
                                Many apps need user signup, password reset, authorization, API’s,
                                logging, database persistence, sending emails, payment processing, 
                                metrics gathering, deployment, input validation, … We would like to
                                implement them once and reuse them if possible. A framework means
                                even the integration of those implementations is trivial. 
                                A framework can integrate security features into its operation 
                                and aggregate bug fixing efforts to make something more robust.
                            </p>
                        </div>
                    </div>    
            </section>
            </> 
        )
    }
}
export default Skills;