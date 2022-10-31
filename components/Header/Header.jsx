import React,{useRef,useEffect, useState} from "react";  

import { Container} from "reactstrap";
import classes from './header.module.css';
import Link from "next/link";


const NAV__LINK=[
    {
        path:'/',
        display: 'Home'
    },
    {
        path:'#employer',
        display: 'Employer'
    },

    {
        path:'#experience',
        display: 'Experience'
    },

    {
        path:'#portfolio',
        display: 'Portfolio'
    },

    {
        path:'#contact',
        display: 'Contact',
    },
];

const Header = () => {

    const headerRef = useRef(null);

        const [active, setActive] = useState(false);


    const headerFunc = ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop 
                > 80){
                    headerRef.current.classList.add(`${classes.header__shrink}`)
                } else {
                    headerRef.current.classList.remove(`${classes.header__shrink}`)
                }
    }

    useEffect(()=>{
        window.addEventListener('scroll',headerFunc)
        return ()=> window.removeEventListener('scroll',headerFunc)
    },[]);

        

    return (
    <header className={`${classes.header}`} ref={headerRef}>
        <Container>
            <div className = {`${classes.nav__wrapper}`}>
                {/* navigation logo */}
                <div className={`${classes.logo}`}>
                    <h1><span>@</span>TANDO / SOVTECH</h1>

                </div>
                {/* nav menu */}
                <div className={`${classes.navigation}`}>
                <div className={`${classes.nav__menu}`}> 
                    {NAV__LINK.map((item, index) => (
                        <Link href={item.path} key={index}>
                             {item.display}
                        </Link>

                    ))}  
                    <div className={`${classes.nav__right}`}>
                        <p className=" d-flex align-items-center gap-3 mb-0"> 
                         {" "}
                        <i class="ri-phone-line"></i> +276 419 5246{" "}
                        </p>
                       
                           
                    </div>
                </div>
                </div>
                <div onClick={() => setActive(!active)}>
                <div className={active ? classes.activehamburger : classes.hamburger}>
                </div>
                </div>
            </div>
        </Container>
    </header>
    );
};

export default Header;
