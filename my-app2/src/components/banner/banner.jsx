import React from 'react'
import styles from './banner.module.css'

import poster1 from '../img/Posters_Arasaka_24inx36in.jpg'
import poster2 from '../img/Posters_Electronic_Murderer_24inx36in.jpg'
import poster3 from '../img/Posters_Sojasil_Machistador_24inx36in.jpg'

const Banner = () => {
  return (
    <div className={styles.banners}>
          <ul className={styles.banners_list}>
            <li className={styles.banners_list_tem}><a href="#" className={styles.banners_list_link}>
              <img src={poster1} alt="Плотва" className={styles.banner_img} /></a>
            </li>
            <li className={styles.banners_list_item}><a href="#" className={styles.banners_list_link}>
              <img src={poster2} alt="Плотва"
                className={styles.banner_img} /></a>
            </li>
            <li className={styles.banners_list_item}><a href="#" cclassName={styles.banners_list_link}>
              <img src={poster3} alt="Плотва"
                className={styles.banner_img} /></a>
            </li>
          </ul>
        </div>
  )
}

export default Banner