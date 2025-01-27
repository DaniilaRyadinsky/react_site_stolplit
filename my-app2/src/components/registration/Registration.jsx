import React from 'react'
import styles from '../login/Login.module.css'
import BtnReg from '../BtnReg/BtnReg'
import Input from '../Input/Input'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className={styles.container}>

            <div className={styles.login_container}>
                {/* <MyModal visible={modal} setVisible={setModal}>
                    <h1 style={{ color: "#080808" }} >{text}</h1>
                    <BtnReg style={{ color: "#666" }} onClick={Close} > Закрыть </BtnReg>
                </MyModal> */}
                <h1 className={styles.login_title}>Регистрация</h1>
                <Input type="text"  className={styles.login_input} id="login">Логин</Input>
                <Input type="password"  className={styles.login_input} id="pass1">Пароль</Input>
                <Input type="password"  className={styles.login_input} id="pass2">Повторите пароль</Input>
                <div className={styles.btn_login_container}>
                    <BtnReg >Создать аккаунт</BtnReg>
                    <BtnReg  style={{ color: "#666" }}>Войти</BtnReg>
                </div> 
            </div>
        </div>
  )
}

export default Registration