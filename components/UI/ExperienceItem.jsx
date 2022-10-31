import React from "react";
import classes from '../../styles/experienceitem.module.css';

const ExperienceItem = ({title, icon}) => {
    return (<div className={`${classes.experience_item}`}>
        <span>
            <i className={icon}></i>
        </span>
        <h5>{title}</h5>
    </div>
    );
};

export default ExperienceItem;