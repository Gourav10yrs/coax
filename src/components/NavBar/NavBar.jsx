import React,{Component} from 'react';
import styles from './NavBar.module.css';
import $ from "jquery";
import cx from 'classname'

class NavBar extends Component{

    state={
        isActive : false,
    }
    onClickHandler= (e) =>{
        this.setState({
            isActive: true
        })
    }
    onClickClose = (e) =>{
        this.setState({
            isActive :false
        })
    }

 render(){    
   let open = (this.state.isActive) ? 'NavBar_header__mobileMenuactive__g2CTN' : 'none';
     return(
        <>
            <div className={styles.topNavbar}>
            <div className={styles.logo}>
                <a href="/">
                    <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.9984C0 7.20184 7.09054 0 15.9234 0C20.3313 0 24.3234 1.80633 27.1954 4.69927C28.6921 6.2069 28.679 8.63821 27.1662 10.1298C25.6534 11.6213 23.2137 11.6083 21.717 10.1007C20.2244 8.59714 18.1782 7.68 15.9234 7.68C11.4243 7.68 7.70642 11.3656 7.70642 15.9984C7.70642 20.6312 11.4243 24.3168 15.9234 24.3168C18.1804 24.3168 20.2247 23.4003 21.7222 21.8941C21.7736 21.8424 21.8264 21.7922 21.8806 21.7435L31.356 13.2383C31.4243 13.1723 31.4945 13.1093 31.5665 13.0493L40.9584 4.61886C43.828 1.77073 47.7827 0.00324219 52.15 0.00324219C60.9829 0.00324219 68.0734 7.20508 68.0734 16.0016C68.0734 24.7982 60.9829 32 52.15 32C47.7847 32 43.8272 30.2284 40.9616 27.3843L34.0367 21.168L27.114 27.382C24.2469 30.2241 20.2934 31.9968 15.9234 31.9968C7.09054 31.9968 0 24.7949 0 15.9984ZM39.7941 16L46.1961 21.7469C46.251 21.7961 46.3044 21.847 46.3564 21.8993C47.849 23.4029 49.8952 24.32 52.15 24.32C56.6491 24.32 60.367 20.6344 60.367 16.0016C60.367 11.3688 56.6491 7.68324 52.15 7.68324C49.8907 7.68324 47.8481 8.5981 46.3532 10.1039C46.3012 10.1563 46.2477 10.2072 46.1928 10.2565L39.7941 16Z" fill="#2255CE"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M87.9817 0C96.8486 0 104.037 7.16344 104.037 16V28.16C104.037 30.2808 102.312 32 100.183 32C98.0554 32 96.3303 30.2808 96.3303 28.16V24H79.633V28.16C79.633 30.2808 77.9079 32 75.7798 32C73.6517 32 71.9266 30.2808 71.9266 28.16V16C71.9266 7.16344 79.1147 0 87.9817 0ZM79.633 16.32H96.3303V16C96.3303 11.405 92.5925 7.68 87.9817 7.68C83.3708 7.68 79.633 11.405 79.633 16V16.32Z" fill="#2255CE"></path>
                        <path d="M109.018 1.12471C110.523 -0.374903 112.963 -0.374903 114.468 1.12471L123.945 10.5694L133.422 1.12471C134.927 -0.374903 137.367 -0.374903 138.871 1.12471C140.376 2.62432 140.376 5.05568 138.871 6.55529L129.394 16L138.871 25.4447C140.376 26.9443 140.376 29.3757 138.871 30.8753C137.367 32.3749 134.927 32.3749 133.422 30.8753L123.945 21.4306L114.468 30.8753C112.963 32.3749 110.523 32.3749 109.018 30.8753C107.514 29.3757 107.514 26.9443 109.018 25.4447L118.496 16L109.018 6.55529C107.514 5.05568 107.514 2.62432 109.018 1.12471Z" fill="#2255CE"></path>
                    </svg>
                </a>
            </div>
            <div className={styles.navbarList}>
                    <ul className={styles.navbarNav}>
                        <li className={styles.navbarItem}>
                            <a className={cx(styles.navbarLink, styles.caret)} href="#">Soluions</a>

                            <div className={styles.nav__dropdown}>
                                <h3 className={styles.nav__dropdownHeading}>Solutions</h3>
                                <ul className={styles.nav__drop}>
                                    <li className={styles.nav__subitem}>
                                        <a href="#" className={styles.nav__sublink}>
                                            <span>
                                                <img  width="24px" src="http://thirdessential.com/coax/assets/images/header/business-processes-automation.png" />
                                            </span>
                                            <span>Business Processes Automation</span>
                                        </a>
                                    </li>
                                    <li className={styles.nav__subitem}>
                                        <a href="#" className={styles.nav__sublink}>
                                            <span>
                                                <img  width="24px" src="http://thirdessential.com/coax/assets/images/header/design.png" />
                                            </span>
                                            <span>Product research<br /> and design</span>
                                        </a>
                                    </li>
                                    <li className={styles.nav__subitem}>
                                        <a href="#" className={styles.nav__sublink}>
                                            <span>
                                                <img  width="24px" src="http://thirdessential.com/coax/assets/images/header/uiux.png" />
                                            </span>
                                            <span>Web & Mobile applications for B2B and B2C</span>
                                        </a>
                                    </li>
                                    <li className={styles.nav__subitem}>
                                        <a href="#" className={styles.nav__sublink}>
                                            <span>
                                                <img  width="24px" src="http://thirdessential.com/coax/assets/images/header/software%20modernization.png" />
                                            </span>
                                            <span>Legacy software modernization</span>
                                        </a>
                                    </li>
                                    <li className={styles.nav__subitem}>
                                        <a href="#" className={styles.nav__sublink}>
                                            <span>
                                                <img  width="24px" src="http://thirdessential.com/coax/assets/images/header/integration.png" />
                                            </span>
                                            <span>Integrations</span>
                                        </a>
                                    </li>
                                    <li className={styles.nav__subitem}>
                                        <a href="#" className={styles.nav__sublink}>
                                            <span>
                                                <img  width="24px" src="http://thirdessential.com/coax/assets/images/header/scale.png" />
                                            </span>
                                            <span>Scaling product delivery</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className={styles.navbarItem}>
                            <a className={styles.navbarLink} href="#">Industries</a>
                        </li>
                        <li className={styles.navbarItem}>
                            <a className={styles.navbarLink} href="#">Technologies</a>
                        </li>
                        <li className={styles.navbarItem}>
                            <a className={styles.navbarLink} href="#">Showcases</a>
                        </li>
                        <li className={styles.navbarItem}>
                            <a className={styles.navbarLink} href="#">Team</a>
                        </li>
                        <li className={styles.navbarItem}>
                            <a className={styles.navbarLink} href="#">Blog</a>
                        </li>
                        <li className={styles.navbarItem}>
                            <a className={styles.navbarLink} href="#">Careers</a>
                        </li>
                    </ul>
            </div>
            <div className={styles.contactUs}>
                <a href="#" className={styles.contactUsButton}> Contact Us
                <span className={styles.contactarrow}><img src="http://thirdessential.com/coax/assets/images/ar_right.png"/></span>
                </a>
            </div>
        </div>
            <div className={styles.topNavbar__m}>
                <div className={styles.logo}>
                    <a href="/">
                        <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.9984C0 7.20184 7.09054 0 15.9234 0C20.3313 0 24.3234 1.80633 27.1954 4.69927C28.6921 6.2069 28.679 8.63821 27.1662 10.1298C25.6534 11.6213 23.2137 11.6083 21.717 10.1007C20.2244 8.59714 18.1782 7.68 15.9234 7.68C11.4243 7.68 7.70642 11.3656 7.70642 15.9984C7.70642 20.6312 11.4243 24.3168 15.9234 24.3168C18.1804 24.3168 20.2247 23.4003 21.7222 21.8941C21.7736 21.8424 21.8264 21.7922 21.8806 21.7435L31.356 13.2383C31.4243 13.1723 31.4945 13.1093 31.5665 13.0493L40.9584 4.61886C43.828 1.77073 47.7827 0.00324219 52.15 0.00324219C60.9829 0.00324219 68.0734 7.20508 68.0734 16.0016C68.0734 24.7982 60.9829 32 52.15 32C47.7847 32 43.8272 30.2284 40.9616 27.3843L34.0367 21.168L27.114 27.382C24.2469 30.2241 20.2934 31.9968 15.9234 31.9968C7.09054 31.9968 0 24.7949 0 15.9984ZM39.7941 16L46.1961 21.7469C46.251 21.7961 46.3044 21.847 46.3564 21.8993C47.849 23.4029 49.8952 24.32 52.15 24.32C56.6491 24.32 60.367 20.6344 60.367 16.0016C60.367 11.3688 56.6491 7.68324 52.15 7.68324C49.8907 7.68324 47.8481 8.5981 46.3532 10.1039C46.3012 10.1563 46.2477 10.2072 46.1928 10.2565L39.7941 16Z" fill="#2255CE"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M87.9817 0C96.8486 0 104.037 7.16344 104.037 16V28.16C104.037 30.2808 102.312 32 100.183 32C98.0554 32 96.3303 30.2808 96.3303 28.16V24H79.633V28.16C79.633 30.2808 77.9079 32 75.7798 32C73.6517 32 71.9266 30.2808 71.9266 28.16V16C71.9266 7.16344 79.1147 0 87.9817 0ZM79.633 16.32H96.3303V16C96.3303 11.405 92.5925 7.68 87.9817 7.68C83.3708 7.68 79.633 11.405 79.633 16V16.32Z" fill="#2255CE"></path>
                            <path d="M109.018 1.12471C110.523 -0.374903 112.963 -0.374903 114.468 1.12471L123.945 10.5694L133.422 1.12471C134.927 -0.374903 137.367 -0.374903 138.871 1.12471C140.376 2.62432 140.376 5.05568 138.871 6.55529L129.394 16L138.871 25.4447C140.376 26.9443 140.376 29.3757 138.871 30.8753C137.367 32.3749 134.927 32.3749 133.422 30.8753L123.945 21.4306L114.468 30.8753C112.963 32.3749 110.523 32.3749 109.018 30.8753C107.514 29.3757 107.514 26.9443 109.018 25.4447L118.496 16L109.018 6.55529C107.514 5.05568 107.514 2.62432 109.018 1.12471Z" fill="#2255CE"></path>
                        </svg>
                    </a>
                </div>
                <span className={styles.nav__toggle} onClick={this.onClickHandler}>
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.5H20V0.5H0V3.5ZM0 13.5H20V10.5H0V13.5Z" fill="#000"></path>
                    </svg>
                </span>
            </div>
            <div className={`NavBar_header__mobileMenu__3V6kt ${open}`}>
                <div className={styles.topNavbar__y}>
                    <div className={styles.logo}>
                        <a href="/">
                            <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.9984C0 7.20184 7.09054 0 15.9234 0C20.3313 0 24.3234 1.80633 27.1954 4.69927C28.6921 6.2069 28.679 8.63821 27.1662 10.1298C25.6534 11.6213 23.2137 11.6083 21.717 10.1007C20.2244 8.59714 18.1782 7.68 15.9234 7.68C11.4243 7.68 7.70642 11.3656 7.70642 15.9984C7.70642 20.6312 11.4243 24.3168 15.9234 24.3168C18.1804 24.3168 20.2247 23.4003 21.7222 21.8941C21.7736 21.8424 21.8264 21.7922 21.8806 21.7435L31.356 13.2383C31.4243 13.1723 31.4945 13.1093 31.5665 13.0493L40.9584 4.61886C43.828 1.77073 47.7827 0.00324219 52.15 0.00324219C60.9829 0.00324219 68.0734 7.20508 68.0734 16.0016C68.0734 24.7982 60.9829 32 52.15 32C47.7847 32 43.8272 30.2284 40.9616 27.3843L34.0367 21.168L27.114 27.382C24.2469 30.2241 20.2934 31.9968 15.9234 31.9968C7.09054 31.9968 0 24.7949 0 15.9984ZM39.7941 16L46.1961 21.7469C46.251 21.7961 46.3044 21.847 46.3564 21.8993C47.849 23.4029 49.8952 24.32 52.15 24.32C56.6491 24.32 60.367 20.6344 60.367 16.0016C60.367 11.3688 56.6491 7.68324 52.15 7.68324C49.8907 7.68324 47.8481 8.5981 46.3532 10.1039C46.3012 10.1563 46.2477 10.2072 46.1928 10.2565L39.7941 16Z" fill="#2255CE"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M87.9817 0C96.8486 0 104.037 7.16344 104.037 16V28.16C104.037 30.2808 102.312 32 100.183 32C98.0554 32 96.3303 30.2808 96.3303 28.16V24H79.633V28.16C79.633 30.2808 77.9079 32 75.7798 32C73.6517 32 71.9266 30.2808 71.9266 28.16V16C71.9266 7.16344 79.1147 0 87.9817 0ZM79.633 16.32H96.3303V16C96.3303 11.405 92.5925 7.68 87.9817 7.68C83.3708 7.68 79.633 11.405 79.633 16V16.32Z" fill="#2255CE"></path>
                                <path d="M109.018 1.12471C110.523 -0.374903 112.963 -0.374903 114.468 1.12471L123.945 10.5694L133.422 1.12471C134.927 -0.374903 137.367 -0.374903 138.871 1.12471C140.376 2.62432 140.376 5.05568 138.871 6.55529L129.394 16L138.871 25.4447C140.376 26.9443 140.376 29.3757 138.871 30.8753C137.367 32.3749 134.927 32.3749 133.422 30.8753L123.945 21.4306L114.468 30.8753C112.963 32.3749 110.523 32.3749 109.018 30.8753C107.514 29.3757 107.514 26.9443 109.018 25.4447L118.496 16L109.018 6.55529C107.514 5.05568 107.514 2.62432 109.018 1.12471Z" fill="#2255CE"></path>
                            </svg>
                        </a>
                    </div>
                    <span className={styles.nav__toggle} onClick={this.onClickClose}>
                        <img src="http://thirdessential.com/coax/assets/images/svg/close.svg" alt="x"/>
                    </span>
                </div>
                <ul className={styles.navbarNav}>
                    <li className={styles.navbarItem}>
                        <a className={styles.navbarLink} href="#">Solutions</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a className={styles.navbarLink} href="#">Industries</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a className={styles.navbarLink} href="#">Technologies</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a className={styles.navbarLink} href="#">Showcases</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a className={styles.navbarLink} href="#">Team</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a className={styles.navbarLink} href="#">Blog</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a className={styles.navbarLink} href="#">Careers</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
}

export default NavBar