import React from 'react'
import styles from './EmployerCard.module.css'
import imgMet from '../img/yKnoTK6aadg.jpg'




const EmployerCard = (props) => {
  return (
    <div className={styles.employer_container}>
            <img src={props.link} alt="Плотва" className={styles.employer_img}></img>
                  <div className={styles.employer_description_container}>
                    <h3 className={styles.content_employers_name}>{props.name}</h3>
                    <p className={styles.content_employers_description}>{props.description}</p>
                    <p className={styles.content_employers_description}>Окончил МГТУ СТАНКИН</p>
                  </div>
              </div>
  )
}

export default EmployerCard