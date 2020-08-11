import React from 'react';
import './projects.css';
import icon1 from '../images/proj.jpg';

const Projects = () => {
    return(
        <section className="dev-card pt-5" id="work">
            <h2 className="text-center pt-5">
                <strong>CHECK OUT SOME OF MY WORKS.</strong>
            </h2>
            <div className="d-flex container mt-5 flex-wrap">
                <div className="col-md-4 col-12 my-4">
                    <a href="https://github.com/erkinbekabdurakhman/star-db">
                        <div className="card h-100">
                            <img className="card-img-top" src={icon1} alt="" />
                            <div className="card-body text-center">
                                <p className="card-text text-left">
                                Star DB
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-4">
                    <a href="https://github.com/erkinbekabdurakhman/GitHub-User-Finder">
                        <div className="card h-100">
                            <img className="card-img-top"  src={icon1} alt="" />
                            <div className="card-body text-center">
                                <p className="card-text text-left">
                                Github Finder
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-4">
                    <a href="https://github.com/erkinbekabdurakhman/contact-keeper">
                        <div className="card h-100">
                            <img className="card-img-top" src={icon1} alt="" />
                            <div className="card-body text-center">
                                <p className="card-text text-left">
                                Contact Keeper
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-4">
                    <a href="https://github.com/erkinbekabdurakhman/IT-Logger">
                        <div className="card h-100">
                            <img className="card-img-top" src={icon1} alt="" />
                            <div className="card-body text-center">
                                <p className="card-text text-left">
                                IT Logger
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-4">
                    <a href="https://github.com/erkinbekabdurakhman/Doctor">
                        <div className="card h-100">
                            <img className="card-img-top" src={icon1} alt="" />
                            <div className="card-body text-center">
                                <p className="card-text text-left">
                                Doctoroid
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-4">
                    <a href="https://github.com/erkinbekabdurakhman/Twitter-Clone">
                        <div className="card h-100">
                            <img className="card-img-top" src={icon1} alt="" />
                            <div className="card-body text-center">
                                <p className="card-text text-left">
                                Twitter Clone
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;