import React from 'react'
import styles from './Navnavbar.module.css'

const Navnavbar = (props) => {
  return (
    <>
      <ul className={styles.navnavbar__list}>
        {props.list.map((item, index) => <li key={index} className={styles.navnavigation__list_item}>{item}</li>)}
      </ul>
    </>
  )
}

export default Navnavbar