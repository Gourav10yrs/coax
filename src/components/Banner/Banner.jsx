import React from 'react';
import styles from './Banner.module.css';

const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div className={styles.bannercontainer}>
                <div className={styles.bannercontent}>
                    <h1 className={styles.banner__heading}>We Build Teams That Build Your Software</h1>
                    <p className={styles.banner__content}>Your partner for incredible mobile and web products. Finally delivered in great quality and on time.</p>
                    <div className={styles.banner__btn}>
                        <a href="/" className={styles.btn__primary}>
                            Request An Estimation
                            <span><img src="http://thirdessential.com/coax/assets/images/ar_white.png"  alt="arrow" width="17px"/></span>
                        </a>
                        <a href="/" className={styles.btn__default}>
                            Schedule a Call
                            <span><img src="http://thirdessential.com/coax/assets/images/ar_right.png" alt="arrow blue" width="17px"/></span>
                        </a>
                    </div>
                </div>
                <div className={styles.bannerimg}>
                    <img src="http://thirdessential.com/coax/assets/images/main.png" alt="Bannner Img"/>
                </div>
            </div>
        </div>
    )
}

export default Banner