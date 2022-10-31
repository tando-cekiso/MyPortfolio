
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./Subtitle";
import classes from '../../styles/portfolio.module.css';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/portfolio'


const Portfolio = () => {
    return <section id="portfolio">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <Subtitle subtitle='My portfolio'/>
                    <h4 ClassName='mt-4'>Some of my projects</h4>
                </Col>

                <Col lg='6' md='6'>
                    
                </Col>
                { portfolioData.map((item)=>(
                        <Col lg='6' md='4' key={item.id}>
                            <PortfolioItem item ={item}/>
                        </Col>
                    ) ) }
            </Row>
        </Container>
    </section>
   
    
};

export default Portfolio