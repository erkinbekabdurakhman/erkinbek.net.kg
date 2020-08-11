import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Aboutme from '../aboutme';
import Skills from '../skills';
import Projects from '../projects';
import Contacts from '../contact';
import ExtraFooter from '../extrafooter';
import Carousel from '../carousel';

const HomePage = () => {
    return(
        <div>
            <Header />
            <Carousel />
            <Footer />
        </div>
    )
}

const AboutmePage = () => {
    return(
        <div>
            <Header />
            <Aboutme />
            <Footer />
        </div>
    )
}

const ProjectsPage = () => {
    return(
        <div>
            <Header />
            <Projects />
            <Skills />
            <ExtraFooter />
        </div>
    )
}

const ContactsPage = () => {
    return(
        <div>
            <Header />
            <Contacts />
            <Footer />
        </div>
    )
}

export {HomePage, AboutmePage, ProjectsPage, ContactsPage };