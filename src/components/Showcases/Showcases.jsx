import React from 'react';
import styles from './Showcases.module.css'
import cx from 'classnames'

const Showcases = () => {
    return(
        <div className={styles.section}>
            <div className={styles.tech__block}>
                <h2 className={styles.tech__heading}>Showcases</h2>
            </div>
            <div className={styles.showcases__container}>
                <a href="#">
                    <div className={styles.showcases__block}>
                        <div className={styles.showcases__content}>
                            <h5 className={styles.showcases__subHeading}>Ecommerce</h5>
                            <h3 className={cx(styles.showcases__heading, styles.solution__heading__hover)}>Tactical Ecommerce HitMan</h3>
                            <p className={styles.showcases__content}>Streamline your processes to reduce time, costs, and improve productivity.</p>
                            <div className={styles.btn__showcases}>Discover More
                                <span>
                                    <img src="http://thirdessential.com/coax/assets/images/ar_right.png" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.showcases__img}>
                            <img width="66%" src="http://thirdessential.com/coax/assets/images/hitman.png" alt="ShowCases"/>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.showcases__block}>
                        <div className={styles.showcases__content}>
                            <h5 className={styles.showcases__subHeading}>Ecommerce</h5>
                            <h3 className={cx(styles.showcases__heading, styles.solution__heading__hover)}>Legal NLP Tool</h3>
                            <p className={styles.showcases__content}>Streamline your processes to reduce time, costs, and improve productivity.</p>
                            <div className={styles.btn__showcases}>Discover More
                                <span>
                                    <img src="http://thirdessential.com/coax/assets/images/ar_right.png" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.showcases__img}>
                            <img width="66%" src="http://thirdessential.com/coax/assets/images/nlp.png" alt="ShowCases"/>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.showcases__block}>
                        <div className={styles.showcases__content}>
                            <h5 className={styles.showcases__subHeading}>Ecommerce</h5>
                            <h3 className={cx(styles.showcases__heading, styles.solution__heading__hover)}>MICRM</h3>
                            <p className={styles.showcases__content}>Streamline your processes to reduce time, costs, and improve productivity.</p>
                            <div className={styles.btn__showcases}>Discover More
                                <span>
                                    <img src="http://thirdessential.com/coax/assets/images/ar_right.png" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.showcases__img}>
                            <img width="66%" src="http://thirdessential.com/coax/assets/images/micrm.png" alt="ShowCases"/>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.showcases__block}>
                        <div className={styles.showcases__content}>
                            <h5 className={styles.showcases__subHeading}>Ecommerce</h5>
                            <h3 className={cx(styles.showcases__heading, styles.solution__heading__hover)}>CareZapp</h3>
                            <p className={styles.showcases__content}>Streamline your processes to reduce time, costs, and improve productivity.</p>
                            <div className={styles.btn__showcases}>Discover More
                                <span>
                                    <img src="http://thirdessential.com/coax/assets/images/ar_right.png" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.showcases__img}>
                            <img width="66%" src="http://thirdessential.com/coax/assets/images/carezapp.png" alt="ShowCases"/>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.showcases__block}>
                        <div className={styles.showcases__content}>
                            <h5 className={styles.showcases__subHeading}>Ecommerce</h5>
                            <h3 className={cx(styles.showcases__heading, styles.solution__heading__hover)}>Taxod</h3>
                            <p className={styles.showcases__content}>Streamline your processes to reduce time, costs, and improve productivity.</p>
                            <div className={styles.btn__showcases}>Discover More
                                <span>
                                    <img src="http://thirdessential.com/coax/assets/images/ar_right.png" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.showcases__img}>
                            <img width="66%" src="http://thirdessential.com/coax/assets/images/taxod.png" alt="ShowCases"/>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Showcases