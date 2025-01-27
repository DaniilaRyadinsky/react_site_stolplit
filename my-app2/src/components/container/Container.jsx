import styles from './Container.module.css'
import React, { useState } from 'react'
import logo from '../img/logoSP.svg'
import searchLogo from '../img/search.svg'

import {
  Link,
} from 'react-router-dom';


import Navbar from '../Navbar/Navbar.jsx'
import Login from '../login/Login.jsx';
import Registration from '../registration/Registration.jsx';

const Container = (props) => {

  const [search, setSearch] = useState('')


  function handleSearchChange(event) {
    setSearch(event.target.value)
  }


  return (
    <div className={styles.container}>
      <div className={styles.header}>

        <Navbar />

        <div className={styles.logo_container}>
          <Link to='/'><img src={logo} alt="Логотип Столплит" className={styles.logo}></img></Link>
          <div className={styles.search_container}>
            <input required type="text" className={styles.search_place} placeholder='Поиск по товарам' value={search} onChange={handleSearchChange} />
            {/* <input required type="text" className={styles.search_place} placeholder={`${props.search !== '' ? props.search:'Поиск: '}`} value={search} onChange={handleSearchChange} /> */}
            <Link to={`/${search}`}><label className={styles.search_btn} >
              <img src={searchLogo} alt='search' />
            </label></Link>
          </div>
          {/* <button type="button" className={styles.button__login} data-modal="registration-form">
              <div className={styles.header_icon__link}>
                <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path className="s2" d="M1.02101 27.1806C1.02101 25.1521 2.15992 23.0879 4.14677 21.5191C6.29434 19.8237 9.17344 18.8906 12.2549 18.8906C15.3945 18.8906 18.2958 19.8237 20.4212 21.5191C22.3609 23.0741 23.4915 25.1356 23.4915 27.1806V28.0476C23.4918 28.286 23.423 28.5195 23.2933 28.7201C23.1636 28.9207 22.9784 29.0799 22.7599 29.1788C21.2497 29.8613 17.8801 31.0008 12.2549 31.0008C6.62961 31.0008 3.27111 29.8586 1.75257 29.176C1.53349 29.0772 1.34785 28.9176 1.21805 28.7164C1.08825 28.5152 1.01982 28.281 1.02101 28.0421V27.1806Z" stroke="#A5AAAF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="s2" d="M12.2553 15.7029C16.3431 15.7029 19.6568 12.4115 19.6568 8.35143C19.6568 4.29135 16.3431 1 12.2553 1C8.16761 1 4.85385 4.29135 4.85385 8.35143C4.85385 12.4115 8.16761 15.7029 12.2553 15.7029Z" stroke="#A5AAAF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="s2" d="M15.962 1.99365C15.962 1.99365 13.9696 8.67902 4.87781 7.79828" stroke="#A5AAAF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="s2" d="M19.6153 7.74263C19.6153 7.74263 15.8744 7.88024 13.9347 5.12793" stroke="#A5AAAF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className={styles.header_icon__caption}>Войти</span>
              </div>
            </button> */}
            <Link className={styles.busket_button} to='/busket'>Корзина</Link>
        </div>
      </div>
      <div className={styles.content}>
        {props.children}
        {/* <Registration/> */}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer_text}>© Все права защищены</div>
      </footer>

    </div>
  )
}


export default Container