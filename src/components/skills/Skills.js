import React from 'react';
import './skills.css';

const Skills = () => {
    return(
        <section id="about">
            <div className="contain mt-5">
                <div className="row container">
                    <div className="col-md-6 col-12 left my-auto" id="about_left">
                        <h2 className="text-left mb-4">
                        <strong>Skills On Which I'm Working</strong>
                        </h2>
                        <p className="para col-md-11 col-12 px-0">
                        I value technology that allows me to create new things. I catch the new, I am surprised 
                        at the new and apply it in my work. I am focused on the active use of the most modern "know-how",
                        increasing my effectiveness. I open up new knowledge and create new markets, benefiting my customers.
                        </p>
                    </div>
                    <div className="col-md-6 col-12 mt-md-0 mt-5" id="about_right">
                        <p className="tex"><strong>HTML</strong></p>
                        <div className="progress">
                            <div className="progress-bar a1"></div>
                        </div>

                        <p className="tex"><strong>CSS</strong></p>
                        <div className="progress">
                            <div className="progress-bar a1"></div>
                        </div>

                        <p className="tex"><strong>JS</strong></p>
                        <div className="progress">
                            <div className="progress-bar a5"></div>
                        </div>

                        <p className="tex"><strong>REACT</strong></p>
                        <div className="progress">
                            <div className="progress-bar a4"></div>
                        </div>

                        <p className="tex"><strong>React Native</strong></p>
                        <div className="progress">
                            <div className="progress-bar a3"></div>
                        </div>

                        <p className="tex"><strong>Node.js</strong></p>
                        <div className="progress">
                            <div className="progress-bar a4"></div>
                        </div>

                        <p className="tex"><strong>MySQL & MongoDB</strong></p>
                        <div className="progress">
                            <div className="progress-bar a3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;