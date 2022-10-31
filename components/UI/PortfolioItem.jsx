import React from "react";
import classes from '../../styles/portfolioitem.module.css';
import Image from "next/image";


const PortfolioItem = (props) => {
    const{ title, img, keyword} = props.item;
    return (
    <div className={`${classes.portfolio_item}`}>
       
        <div className="bg-transparent">
            <h6>{title}</h6>
            {
                keyword.map((item, index)=>(
                    <span className={`${classes.portfolio_keyword}`} key={index}>
                        {item}
                    </span>

                ))}
            
        </div>

        <div className={`${classes.portfolio_img}`}>
            <Image alt="portfolio_img" src={img} width='506' height='300'/>

        </div>

        
    </div>
    ); 
    
     };
     export default PortfolioItem