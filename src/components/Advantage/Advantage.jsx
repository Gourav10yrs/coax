import React from 'react'
import styles from './Advantage.module.css'

const Advantage = () => {
 return(
     <div className={styles.section}>
         <div className={styles.advantage__container}>
             <div className={styles.advantage__column}>
                 <div>
                     <div className={styles.advantage__icon}>
                         <img src="http://thirdessential.com/coax/assets/images/we@2x.png" width="100%" alt="eye"/>
                     </div>
                     <h3 className={styles.advantage__heading}>WE</h3>
                     <h5 className={styles.advantage__info}>We aim to improve human capabilities through our own projects, our internal tools, and</h5>
                 </div>
             </div>
             <div className={styles.advantage__column}>
                 <div>
                     <div className={styles.advantage__icon}>
                         <img src="http://thirdessential.com/coax/assets/images/clients.png" width="100%" alt="uni"/>
                     </div>
                     <h3 className={styles.advantage__heading}>Our Clients</h3>
                     <h5 className={styles.advantage__info}>A diverse set of challenges for every project keeps us on our toes. This encourages adaptability, but</h5>
                 </div>
             </div>
             <div className={styles.advantage__column}>
                 <div>
                     <div className={styles.advantage__icon}>
                         <img src="http://thirdessential.com/coax/assets/images/community.png" width="100%" alt="home"/>
                     </div>
                     <h3 className={styles.advantage__heading}>Our Community</h3>
                     <h5 className={styles.advantage__info}>Everything we do for DockYard and our clients provides an opportunity to help the community of</h5>
                 </div>
             </div>

         </div>
     </div>
 )
}
export default Advantage