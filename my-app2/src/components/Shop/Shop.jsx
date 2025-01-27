import React from 'react'
import styles from './Shop.module.css'

const Shop = (props) => {
  return (
  <li className={styles.item}>
    <div className={styles.name_container}>
      <p>{props.nameShop}</p>
    </div>
    <div className={styles.adress_container}>
      <p>{props.adress}</p>
    </div>
    <div className={styles.hours_container}>
    <p>{props.openingHours}</p>
    </div>
  </li>  
  )
}

export default Shop