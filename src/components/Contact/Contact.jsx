import React from 'react';
import styles from './Contact.module.css' 

const Contact = () =>{
    return(
        <div className={styles.section}>
            <div className={styles.contact__container}>
                <div className={styles.contact__heading}>
                    <h2 className={styles.contact__head}>Need More Details?</h2>
                </div>
                <div className={styles.contact__form}>
                    <div className={styles.contact__formbody}>
                        <h3 className={styles.contact__formheading}>I want to talk with:</h3>
                        <div className={styles.contact__radioGroup}>
                        <label for="radio1"><input type="radio" id="radio1" name="radio" checked="" />
                            <span></span>Sales Representative
                        </label>
                        <label for="radio2"><input type="radio" id="radio2" name="radio" checked="" />
                            <span></span>Sales Representative
                        </label>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.eight}>
                                <div className={styles.formBlock}>
                                <input className={styles.contact__formField} type="text" required="" />
                                <span>Your Name</span>
                                </div>
                            </div>
                            <div className={styles.eight}>
                                <div className={styles.formBlock}>
                                <input className={styles.contact__formField} type="text" required="" />
                                <span>Your Email</span>
                                </div>
                            </div>                        
                        </div>
                        <div className={styles.sixteen}>
                                <div className={styles.formBlock}>
                                <input className={styles.contact__formField} type="text" required="" />
                                <span>How we can help you?</span>
                                </div>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.eight}>
                            <a href="/" className={styles.btn__primary}>Discover our value
                                <span>
                                    <img src="http://thirdessential.com/coax/assets/images/ar_white.png" width="17px" />
                                </span>
                            </a>
                            </div>
                            <div className={styles.eight}>
                                <h3 className={styles.contact__number}>+1 773-644-8871</h3>
                                <a href="#" className={styles.contact__email}>sales@coaxsoft.com</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact