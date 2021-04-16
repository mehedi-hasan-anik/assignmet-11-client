import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import ProjectArea from '../ProjectArea/ProjectArea';
import ServiceArea from '../ServiceArea/ServiceArea';

const Home = () => {
    return (
        <div>
            <HeaderBottom></HeaderBottom>
            <ProjectArea></ProjectArea>
            <ServiceArea></ServiceArea>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;