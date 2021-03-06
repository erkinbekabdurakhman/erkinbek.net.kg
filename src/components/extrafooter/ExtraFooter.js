import React from 'react';
import './extrafooter.css';
import icon from '../images/cv1.pdf';

const ExtraFooter = () => {
    return(
        <section className="extrafooter">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 block">
                        <h5>Qualificatians: <i className="fa fa-graduation-cap"></i></h5>
                        <p>BA of Social Work</p>
                        <a href={icon} className="btn btn-primary" id="cv-link">Get my CV</a>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow me: <i className="fa fa-users"></i></h5>
                        <a href="https://www.facebook.com/erkinbek.abdurahman"><p><i className="fa fa-facebook-official"></i>  Facebook</p></a>
                        <a href="https://www.instagram.com/alaman_ulak/"><p><i className="fa fa-instagram"></i> Instagram</p></a>
                        <a href="https://www.youtube.com/channel/UC5WPUrhD4XjQFRjcku6Ni-w/videos?view_as=subscriber"><p><i className="fa fa-youtube-play"></i> Youtube</p></a>
                    </div>
                    <div className="col-md-4">
                        <h5>Sertificates:  <i className="fa fa-paperclip"></i></h5>
                        <p>JS Developer</p>
                        <p>React Developer</p>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
                <hr/>
                    <p>&copy; All rights reserved 2019</p>
            </div>
        </section>
    )
}

export default ExtraFooter;