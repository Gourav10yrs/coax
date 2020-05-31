import React, {useState} from 'react';
import styles from './Solutions.module.css'

const Solutions = () =>{

    const [iteams, setIteams] = useState(
        [
            {
                id : 1,
                title : "Business Processes Automation",
                info : "Enhance your processes with less efforts",
                imgUrl : `http://thirdessential.com/coax/assets/images/business-processes-automation.png`
            },
            {
                id : 2,
                title : "Product research and design",
                info : "Solve real business problems with design",
                imgUrl : `http://thirdessential.com/coax/assets/images/product-research-and-design.png`
            },
            {
                id : 3,
                title : "Web & Mobile applications for B2B and B2C",
                info : "Custom software that you need, nothing else",
                imgUrl : `http://thirdessential.com/coax/assets/images/web-and-mobile-applications.png`
            },
            {
                id : 4,
                title : "Legacy software modernization",
                info : "Let your systems meet the needs of the business now",
                imgUrl : `http://thirdessential.com/coax/assets/images/legacy-software-modernization.png`
            },
            {
                id : 5,
                title : "Integrations",
                info : "When prebuilt automation tool is not enough",
                imgUrl : `http://thirdessential.com/coax/assets/images/integrations.png`
            },
            {
                id : 6,
                title : "Scaling product delivery",
                info : "Full cross-functional teams to scale feature delivery",
                imgUrl : `http://thirdessential.com/coax/assets/images/scaling-product-delivery.png`
            },

        ])

    return(
        <div className={styles.section}>
            <div className={styles.solutions__block}>
                <h2 className={styles.solutions__heading}>Solutions we deliver</h2>
            </div>

            <div className={styles.row}>

                {iteams.map( (iteam)=> 
                <div className={styles.solutions__container} key={iteam.id}>
                    <a href="/">
                        <div className={styles.solutions__data}>
                            <div className={styles.solutions__icon}>
                                <img width="100%" src={iteam.imgUrl} alt="solution"/>
                            </div>
                            <div className={styles.solutions__info}>
                                <h3 className={styles.solutions__header}>{iteam.title}</h3>
                                <p className={styles.solutions__info}>{iteam.info}</p>
                            </div>
                        </div>
                    </a>
                </div>
                )}
            </div>

        </div>
    )
}

export default Solutions