import React from 'react';
import styles from './Platform.module.css'

const Platform =() =>{
    return(
        <div className={styles.section}>
            <div className={styles.platform__block}>
                <div className={styles.platform__container}>
                    <div className={styles.platform__img}>
                        <img src="http://thirdessential.com/coax/assets/images/upwork.png" alt="platform" />
                    </div>
                    <h3 className={styles.platform__heading}>Upwork's</h3>
                    <p className={styles.platform__info}>top rated agency</p>
                </div>
                <div className={styles.platform__container}>
                    <div className={styles.platform__img}>
                        <img src="http://thirdessential.com/coax/assets/images/image%2064.png" alt="platform" />
                    </div>
                    <h3 className={styles.platform__heading}>Trustpilot</h3>
                    <p className={styles.platform__info}>Based on 1,423 reviews</p>
                </div>
                <div className={styles.platform__container}>
                    <div className={styles.platform__img}>
                        <img src="http://thirdessential.com/coax/assets/images/image%2061%20(1).png" alt="platform" />
                    </div>
                    <h3 className={styles.platform__heading}>Clutch</h3>
                    <p className={styles.platform__info}>4.8 of 5</p>
                </div>
                <div className={styles.platform__container}>
                    <div className={styles.platform__img}>
                        <img src="http://thirdessential.com/coax/assets/images/image%2061%20(1).png" alt="platform" />
                    </div>
                    <h3 className={styles.platform__heading}>Best Ukraine <br /> B2B Software</h3>
                    <p className={styles.platform__info}>Clutch 2019 Top</p>
                </div>
                <div className={styles.platform__container}>
                    <div className={styles.platform__img}>
                        <img src="http://thirdessential.com/coax/assets/images/image%2063.png" alt="platform" />
                    </div>
                    <h3 className={styles.platform__heading}>GoodFirms</h3>
                    <p className={styles.platform__info}>10 of 10</p>
                </div>
                <div className={styles.platform__container}>
                    <div className={styles.platform__img}>
                        <img src="http://thirdessential.com/coax/assets/images/image%2065.png" alt="platform" />
                    </div>
                    <h3 className={styles.platform__heading}>MobileAppDaily</h3>
                    <p className={styles.platform__info}>Top React Native App Development Company</p>
                </div>
            </div>
            
        </div>
    )

}

export default Platform