import React from "react"; 
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";

const NAV__LINK=[
    {
        path:"/",
        display: "Home",
    },
    {
        path:"#employer",
        display: 'Employer',
    },

    {
        path:"#experience",
        display: 'Experience',
    },

    {
        path:"#portfolio",
        display: 'Portfolio',
    },

    {
        path:"#contact",
        display: 'Contact',
    },
];

const Footer= () => {
    return (
         <footer>
        <Container>
            <Row>
                {/*footertop*/}
                <Col lg='6'>
                <div className={`${classes.nav__menu}`}> 
                    {NAV__LINK.map((item, index) => (
                        <Link href={item.path} key={index}>
                             {item.display}
                        </Link>

                    ))}  
                </div>
                </Col>
                <Col lg='6'>
                    <div className={`${classes.footer__creator}`}>
                        <h6>Developed by Tando Cekiso</h6>
                    </div>
                </Col>
                {/*footerbottom*/}
                <Col lg='12'>
                    <div className={`${classes.footer__copyright}`}>
                        <p>&copy; Copyright {2022} - Developed by Tando Cekiso. 
                        All rights reserved.{" "}
                        </p>
                    </div>
                </Col>
             </Row>
        </Container>

    </footer>
    );
};

export default Footer;
