

import React from "react";
import Subtitle from "./Subtitle";  
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from '../../public/images/tee.png';
import classes from '../../styles/hero.module.css';

const Hero = () => {
    return  <section className={`${classes.hero}`}>
        <Container>
            <Row>
                {/*HeroSection*/}
                <Col lg='6' md='6'>
                    <div className={`${classes.hero__section}`}>
                        <Subtitle subtitle="Greetings"/>
                        <h2 className="mt-3 mb-3">I&apos;m Tando Cekiso</h2>
                        <h5 className="mb-4">A Software Developer</h5>
                        <p> I graduated in Information Technology, majoring in software development 
                            and information systems. I enjoy building web systems and solutions that help clients
                            with business solutions. Being a developer is a passion and i want to use my discipline
                            to make a change in our communities.
                            </p>
                            <div className="mt-5">
                                <button className="primary__btn"><Link href="#">Appoint me
                                </Link></button>
                                <button className="secondary__btn"><Link href="#">MY CV
                                </Link></button>
                            </div>
                    </div>
                </Col>

                  {/*HeroImg*/}
                <Col lg='6' md='6'>
                    <div className={`${classes.hero_img} text-end`}>
                        <Image alt = "hero-image" src={heroImg} width='400'
                        height='400'/>
                       
                        <div className={`${classes.hero_experience}`}>
                            <span><i className= "ri-lightbulb-flash-line"></i></span>
                            <div className="bg-transparent">
                                <h6>Experience</h6>
                                <h5 className="mb-0">2 years</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
    
};

export default Hero;