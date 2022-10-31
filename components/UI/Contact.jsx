
import React from "react";
import { Container, Row, Col } from "reactstrap";

import Subtitle from "./Subtitle";
import classes from '../../styles/contact.module.css';
import Form from "./Form";


const Contact = () => {
    return <section id="contact" className={`${classes.contact}`}>
    <Container>
        <Row>
            <Col lg='5' md='6'>
                <Subtitle subtitle ='Contact me'/>
                <h3 className='mt-4 mb-4'>Contact me on these channels</h3>
            <ul className={`${classes.contact_info}`}>
                <li className={`${classes.contact_infoitem}`}>

                    <span><i className="ri-map-pin-line"></i></span></li>
                <p>Acarcia Park - Cape Town</p>

                <li className={`${classes.contact_infoitem}`}>
                    <span><i className="ri-mail-line"></i></span></li>
                <p>cekisotando09@gmail.com</p>

                <li className={`${classes.contact_infoitem}`}>
                    <span><i className="ri-phone-line"></i></span></li>
                <p>+27634195246</p>
            </ul>
            </Col>

            <Col lg='6' md='6'>
                <Form/>
            </Col>
        </Row>
    </Container>
    </section>
}

export default Contact