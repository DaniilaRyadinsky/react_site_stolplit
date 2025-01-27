import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import BtnReg from '../BtnReg/BtnReg'
import Input from '../Input/Input'

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.login_container}>
                {/* <MyModal visible={modal} setVisible={setModal}>
                    <h1 style={{ color: "#080808" }} >{text}</h1>
                    <BtnReg style={{ color: "#666" }} onClick={Close}> Закрыть </BtnReg>
                </MyModal> */}
                <h1 className={styles.login_title}>Вход в профиль</h1>
                <Input type="text" id="login">Логин</Input>
                <Input type="password" id="pass">Пароль</Input>
                <Link className={styles.loginlink}>Не помню пароль</Link>
                <div className={styles.btn_login_container}>
                    <BtnReg >Войти</BtnReg>
                    <BtnReg  style={{ color: "#666" }}>Регистрация</BtnReg>
                </div>
            </div>
        </div>
    )
}

export default Login