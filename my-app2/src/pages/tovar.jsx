import React, { useEffect, useState } from 'react'
import styles from './tovar.module.css'
import Container from '../components/container/Container'
import { useParams } from 'react-router-dom'
import BtnReg from '../components/BtnReg/BtnReg'

const Tovar = () => {
  const [itemsMore, setItemsMore] = useState([])
  const [item, setItem] = useState([])

  const params = useParams()
  const index = params.id
  console.log(`${index} params`)

  useEffect(() => {
    fetch(`http://localhost:5088/api/Services/${index}`)
            .then(res => res.json()).then((r) => 
                setItemsMore(r)
            )
            .then(() => {
                fetch(`http://localhost:5088/api/Items/${index}`)
                .then(res2 => (res2.json()).then((r)=> 
                    setItem(r)))
              })

      }, [])

      function inBusket() {
        var struct = {
          "id":Number(index)}
        fetch('http://localhost:5088/api/Buskets/', {
          method: "POST",
          mode: "cors",
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(struct)
      })
      }


  return (
    <Container>
    <div className={styles.tovar_container}>
      <img src={item.img_link} className={styles.main_img} />
      <div className={styles.down}>
        <h2 className={styles.name}>{item.nameItem}</h2>
        <p className={styles.price}>{item.price}</p>
        <BtnReg onClick ={inBusket}>В корзину</BtnReg>
        <p className={styles.options}>Доставка Столплит <b>{itemsMore.deliveryTime}</b></p>
        <p className={styles.options}>Стоимость доставки <b>{itemsMore.elevatorPrice}руб</b></p>
        <p className={styles.options}>Стоимость подьема <b>{itemsMore.handPrice}руб</b></p>
        <p className={styles.options}>Стоимость сборки <b>{itemsMore.assemblyPrice}руб</b></p>
      </div>
    </div>
      <h3>Описание</h3>
      <p className={styles.card_dimensions}>Ширина <b>{item.width}</b> x Высота<b>{item.height}</b> x Глубина<b>{item.depth}</b></p>

    </Container>
  )
}

export default Tovar