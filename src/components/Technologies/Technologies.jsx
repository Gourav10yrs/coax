import React, {useState} from 'react';
import styles from './Technologies.module.css'

const Technologies =() =>{
    return (
        <div className={styles.section}>
            <div className={styles.tech__block}>
                <h2 className={styles.tech__heading}>We deliver to clients that evolve</h2>
            </div>
            <div class={styles.tech__headingBlock}>
                 <h3 class={styles.tech__headingS}>Industries</h3>
            </div>
            <div className={styles.tech__container}> 
                <div className={styles.tech_column}>
                    <ul className={styles.tech__list}>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/hospitality.png" alt="tech"/></span>
                            Real Estate
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/legal.png" alt="tech"/></span>
                            Legal
                        </li>
                    </ul>
                </div>
                <div className={styles.tech_column}>
                <ul className={styles.tech__list}>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/travel.png" alt="tech"/></span>
                            Travel
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/healthcare.png" alt="tech"/></span>
                            Healthcare
                        </li>
                    </ul>
                </div>
                <div className={styles.tech_column}>
                <ul className={styles.tech__list}>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/financial.png" alt="tech"/></span>
                            Finance
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/automotive.png" alt="tech"/></span>
                            Automotive
                        </li>
                    </ul>
                </div>
            </div>

            <div class={styles.tech__headingBlock}>
                 <h3 class={styles.tech__headingS}>Technologies</h3>
            </div>
            <div className={styles.tech__container2}> 
                <div className={styles.tech_column}>
                    <ul className={styles.tech__list}>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/nodejs.png" alt="tech"/></span>
                            Node.js
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/ror.png" alt="tech"/></span>
                            Ruby on Rails
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/python.png" alt="tech"/></span>
                            Python
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/expressjs.png" alt="tech"/></span>
                            Express.js
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/meteorjs.png" alt="tech"/></span>
                            Meteor.js
                        </li>
                        
                    </ul>
                </div>
                <div className={styles.tech_column}>
                    <ul className={styles.tech__list}>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/uiux.png" alt="tech"/></span>
                            UI/UX
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/discovery.png" alt="tech"/></span>
                            Product Discovery
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/design.png" alt="tech"/></span>
                            Product Design
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/prototyping.png" alt="tech"/></span>
                            Rapid Prototyping
                        </li>
                    </ul>
                </div>
                <div className={styles.tech_column}>
                    <ul className={styles.tech__list}>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/reactjs.png" alt="tech"/></span>
                            React.js
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/angularjs.png" alt="tech"/></span>
                            Angular.js
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/reactjs.png" alt="tech"/></span>
                            React Native
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/swift.png" alt="tech"/></span>
                            Swift
                        </li>
                    </ul>
                </div>
                <div className={styles.tech_column}>
                    <ul className={styles.tech__list}>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/cloud.png" alt="tech"/></span>
                            Cloud
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/automation.png" alt="tech"/></span>
                            Automation
                        </li>
                        <li className={styles.tech__item}>
                            <span> <img width="22px" src="http://thirdessential.com/coax/assets/images/vector-icon/monitoring.png" alt="tech"/></span>
                            Monitoring
                        </li>                    
                    </ul>
                </div>
            </div>

        </div>
    )

}

export default Technologies