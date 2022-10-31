import React from "react";
import classes from '../../styles/form.module.css'



const Form = () => {
    return (
    <form className={`${classes.form}`}>
        <div className={`${classes.form_temp}`}>
            <input type="text" placeholder="Your Name" required/>
        </div>

        <div className={`${classes.form_temp}`}>
            <input type="email" placeholder="Your Email Address" required/>
        </div>

        <div className={`${classes.form_temp}`}>
            <textarea type="text" rows={5} placeholder="Leave a message" required/>
        </div>

        <button className="primary__btn "  type="submit">Send</button>
    </form>
    );
};

export default Form;