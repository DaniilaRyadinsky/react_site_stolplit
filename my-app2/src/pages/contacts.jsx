import React from 'react'
import styles from './contacts.module.css'
import Container from '../components/container/Container'

const Contacts = () => {
  return (
    <Container>
      <div className={styles.contacts}>
        <h2 className={styles.content_title}>Напишите нам</h2>
        <form action="" className={styles.contact_form}>
          <input required type="text" className={styles.contact_form_item} placeholder="Имя" />
          <input required type="email" className={styles.contact_form_item} placeholder="Email" />
          <input required type="text" className={styles.contact_form_item} placeholder="Тема" />
          <textarea className={styles.contact_form_text} placeholder="Сообщение"></textarea>
          <button className={styles.contact_form_button}>Отправить</button>
        </form>
        <div className={styles.contacts_container}>
          <h3 className={styles.contact_form_adress_h}>Адрес</h3>
          <div className={styles.contact_form_adress_tel}>8 (495) 640-00-20</div>
          <div className={styles.contact_form_adress_adress}>Ходынский б-р, 4, Москва, 125167</div>
          <a href="redgreeenblue@gmail.com" className={styles.contact_form_adress_email}>redgreeenblue@gmail.com</a>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.169645114433!2d37.52831267641009!3d55.790292089103495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54997bad11b7d%3A0x63ddaaf02b1d888e!2z0JDQstC40LDQv9Cw0YDQug!5e0!3m2!1sru!2sru!4v1730919319304!5m2!1sru!2sru"
          width="600" height="450" Style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Container>
  )
}

export default Contacts