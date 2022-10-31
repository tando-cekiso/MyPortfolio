import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./Subtitle";
import Image from "next/image";


import classes from "../../styles/employer.module.css";

const Employer = () => {
    return <section id="employer">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <Subtitle subtitle='Employer'/>
                    <h3 className='mt-4'>Why I want to be part of the SOVTECH team</h3>
                    <p>The reason why I was want to be a developer at Sovtech is knowing 
                        that the company will support my growth and development. Company culture is important to me because
                        as a person you become a product of the environment.
                        Looking at the philosophy of the company and the style of how working excites me because 
                        I will be able to express myself and adapt to the environment very quickly. 
                        My ability to lead projects is geared towards being able to work with other people,
                         becoming a professional at my discipline and being absorbed in the company. 
                        I am familiar with the tech-stacks that are used at Sovtech and 
                        I wish to expand the knowledge and technical abilities that I have. The opportunity of 
                        being in an environment where I know the value of people, clients, and 
                        developing quality systems is at high priority, that’s a place where I want to be.
                         Lastly my goal is to contribute towards the company’s success, to work as hard to reach my goals and
                          be able to provide for my family.
                    </p>

                    <div className=" d-flex align-items-center gap-5">
                        <div>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.employer_icon}`}>
                                    <i className="ri-checkbox-circle-line">

                                </i>
                                </span>
                                Problem Solving
                            </h6>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.employer_icon}`}>
                                    <i className="ri-checkbox-circle-line">

                                </i>
                                </span>
                                Team Player
                            </h6>
                        </div>

                        <div>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.employer_icon}`}>
                                    <i className="ri-checkbox-circle-line">

                                </i>
                                </span>
                                Goal driven
                            </h6>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.employer_icon}`}>
                                    <i className="ri-checkbox-circle-line">

                                </i>
                                </span>
                                Adaptive
                            </h6>
                        </div>
                    </div>
                  
                </Col>
                <Col lg='6' md='6'>
                </Col>
            </Row>
        </Container>

    </section>
      
    
}

export default Employer