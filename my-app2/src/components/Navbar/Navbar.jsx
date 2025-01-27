import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <nav>
        <ul className={styles.navigation_list}>
          <li className={styles.navbar_list_item}><Link className={styles.navbar_list_link} to='/shops'>Магазины</Link></li>
          <li className={styles.navbar_list_item}><Link className={styles.navbar_list_link} to='/delivery'>Доставка</Link></li>
          <li className={styles.navbar_list_item}><Link className={styles.navbar_list_link} to='/payment'>Оплата</Link></li>
          <li className={styles.navbar_list_item}><Link className={styles.navbar_list_link} to='/contacts'>Напишите нам</Link></li>
          <li className={styles.navbar_list_item}><Link className={styles.navbar_list_link} to='/about_us'>О компании</Link></li>
          <li className={styles.navbar_list_item}><Link className={styles.navbar_list_link} to='/review'>Отзывы</Link></li>
          <li className={styles.navbar_list_item}><a href="policy.txt" className={styles.navbar_list_link} target="_blank">Политика конфиденциальности</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar