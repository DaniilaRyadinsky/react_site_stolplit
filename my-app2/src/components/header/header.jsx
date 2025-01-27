import React from 'react'
import logo from '../img/logoSP.svg'
import styles from './header.module.css'
import Login from '../login/Login.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Search from '../Search/Search.jsx'
import {Link} from 'react-router'

const Header = () => {
    return (
        <div className={styles.header}>
            <Navbar/>
            <div className={styles.logo_container}>
                <Link to="/catalog"><img src={logo} alt="Логотип Столплит" className={styles.logo}></img></Link>
                <Search/>
            </div>
        </div>
    )
}

export default Header