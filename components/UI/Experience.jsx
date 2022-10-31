import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Subtitle from "./Subtitle";
import classes from '../../styles/experience.module.css';
import ExperienceItem from "./ExperienceItem";


const Experience = () => {
    return  <section id="experience">
        <Container>
            <Row>
              <Col lg='6' md='6'>
              <div className={`${classes.experience_container}`}>
                <div>
                    <ExperienceItem title='Web Development' icon='ri-apps-line' />
                    <ExperienceItem title='Project Management Azure DevOps' icon='ri-computer-line' />
                </div>
                <ExperienceItem title='.NET Framework' icon='ri-code-s-slash-line' />

              </div>
              </Col>
              <Col lg='6' md='6'>
                <Subtitle subtitle = 'My experience as a software developer'/>
                <h3 className="mb-0 mt-4">I adapted,</h3>
                <h3 className="mt-4">I become a better developer</h3>
                <p>During my period of freelancing i a managed to gain more experience post graduation
                    I enrolled in a uDemy course: SQL and Data Analytics for Business Intelligence, which i completed.
                    As part of self development i also job shadowed a business analyst where my tasks where
                    mapping process flows and defining system requirements. Most importantly it was exciting coming from a 
                    JAVA background, now having experience in C# .Net 6 MVC Framework,Javascript and SQL Server Management.
                </p>
                </Col>  
            </Row>
        </Container>
   </section> 
}

export default Experience;