import React from 'react';
import styles from './Footer.module.css'

const Footer =()=> {
    return(
        <div className={styles.footer__container}>
            <div className={styles.widex}>
                <div className={styles.footer__body}>
                    <div className={styles.footer__iteam}>
                        <div className={styles.footer__icon}>
                            <img src="http://thirdessential.com/coax/assets/images/svg/logo%20dark%20blue.svg" alt="logo"/>
                        </div>
                        <p class={styles.footer__text}>We build teams that build your software</p>
                        <a href="/" className={styles.btn__primary}>Get Free Estimation</a>
                        <h3 className={styles.footer__heading}>Follow COAX Software</h3>
                        <ul className={styles.footer__socialList}>
                            <li className={styles.footer__socialItem}>
                                <a href="/" className={styles.footer__socialLink}>
                                    <img  src="http://thirdessential.com/coax/assets/images/vector-icon/linkedin.png" alt="social"/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="/" className={styles.footer__socialLink}>
                                    <img  src="http://thirdessential.com/coax/assets/images/vector-icon/facebook.png" alt="social"/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="/" className={styles.footer__socialLink}>
                                    <img  src="http://thirdessential.com/coax/assets/images/vector-icon/twitter.png" alt="social"/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="/" className={styles.footer__socialLink}>
                                    <img  src="http://thirdessential.com/coax/assets/images/vector-icon/instagram.png" alt="social"/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="/" className={styles.footer__socialLink}>
                                    <img  src="http://thirdessential.com/coax/assets/images/vector-icon/dribbble.png" alt="social"/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="/" className={styles.footer__socialLink}>
                                    <img  src="http://thirdessential.com/coax/assets/images/vector-icon/github.png" alt="social"/>
                                </a>
                            </li>
                        </ul>
                        <h5 className={styles.footer__copyright}>
                            2008-2020 © COAX Software<a className={styles.ftr_underline} href="#"> Terms</a> &amp; <a className={styles.ftr_underline}  href="#">Privacy Policy</a>
                        </h5>
                    </div>
                    <div className={styles.footer__iteam}>
                        <h3 className={styles.footer__headings}>Company</h3>
                        <ul className={styles.footer__footerMenu}>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Home</a>
                            </li>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Showcases</a>
                            </li>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Industries</a>
                            </li>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Blog</a>
                            </li>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Showcases</a>
                            </li>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Team</a>
                            </li>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Hiring</a>
                            </li>
                            <li className={styles.footer__footerMenuList}>
                                <a href="#" className={styles.footer__footerMenuLink}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__iteam}>
                        <h3 className={styles.footer__headings}>Main Office</h3>
                        <p className={styles.footer__contentp}>401 S Milwaukee Ave Wheeling, IL 60090,USA
                            <a href="tel: 773-644-8871">773-644-8871</a>
                        </p>
                        <h3 className={styles.footer__headings}>Development Offices</h3>
                        <p className={styles.footer__contentp}>Mazepy 73/31 Ivano-Frankivsk, 76018 UA
                            <a href="tel: 068-240-8700">068-240-8700</a>
                        </p>

                        <p className={styles.footer__contentp}>Doroshenka 13 Lviv, 79044 UA
                            <a href="tel: 068-240-8700">068-240-8700</a>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
