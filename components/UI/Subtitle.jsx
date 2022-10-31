import React from "react";
import classes from '../../styles/subtitle.module.css';

const Subtitle = (props) => {
    return  <h5 className={`${classes.subtitle}`}>{props.subtitle}</h5>
    
};

export default Subtitle;