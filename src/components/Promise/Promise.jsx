import React from 'react';
import styles from './Promise.module.css'

const Promise =() => {
 return(
     <div className={styles.section}>
         <div className={styles.promise__block}>
             <div className={styles.promise__img}>
                 <img src="http://thirdessential.com/coax/assets/images/promise.png" alt="Promise"/>
             </div>
             <div className={styles.promise__content}>
                <h5 className={styles.promise__subHeading}>Our Promise:</h5>
                <h3 className={styles.promise__heading}>Delivering innovations that matter for your business</h3>
                <a href="/" className={styles.btn__primary}>Discover our value
                    <span>
                        <img src="http://thirdessential.com/coax/assets/images/ar_white.png" width="17px" />
                    </span>
                </a>
             </div>
         </div>

     </div>
 )
}
export default Promise