import { React, useState, useEffect } from 'react'
import Container from '../components/container/Container'
import Shop from '../components/Shop/Shop'
import styles from './shops.module.css'

const Shops = () => {

  const [shops, setShops] = useState([])

  async function fetchItems() {
    const response = await fetch(`http://localhost:5088/api/Shops/`)
    const data = await response.json()
    setShops(data)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  console.log(shops)

  return (
    <Container>
      <h2>Наши магазины в Москве и области</h2>
      <div className={styles.shops_title}>
        <div className={styles.name_container}>
          <p>Название магазина</p>
        </div>
        <div className={styles.adress_container}>
          <p>Адрес</p>
        </div>
        <div className={styles.hours_container}>
          <p>Часы работы</p>
        </div>
      </div>
      <ul className={styles.shop_list}>

        {shops.map(item => <Shop key={item.id.toString()} {...item} />)}
      </ul>

    </Container>
  )
}

export default Shops