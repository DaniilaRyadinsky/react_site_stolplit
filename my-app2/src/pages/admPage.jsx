import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import styles from './admPage.module.css'
import AdmProductCard from '../components/AdmProductCard/AdmProductCard'


const AdmPage = () => {
    const [save, setSave] = useState(false)
      const [items, setItems] = useState([])
      const [loading, setLoading] = useState(false)
    
      async function fetchItems() {
        setLoading(true)
    
        const response = await fetch(`http://localhost:5088/api/Items/`)
        const data = await response.json()
        setItems(data)
        setLoading(false)
      }
    
      useEffect(() => {
        fetchItems()
      }, [])

    function Post(link, struct) {
        console.log(link)
        fetch(link, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(struct)
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data['success']) {
                    setSave(true);;
                }
            })
            .catch((error) => console.log(error));
    }


    function load(e) {
        console.log('clk')
        e.preventDefault()
        var ID = Number(document.getElementById("ID").value);
        var nameItem = document.getElementById("nameItem").value;
        console.log(nameItem)
        var price = Number(document.getElementById("price").value);
        var width = Number(document.getElementById("width").value);
        var height = Number(document.getElementById("height").value);
        var depth = Number(document.getElementById("depth").value);
        var img_link = document.getElementById("img_link").value;
        var deliveryTime = document.getElementById("deliveryTime").value;
        var elevatorPrice = Number(document.getElementById("elevatorPrice").value);
        var handPrice = Number(document.getElementById("handPrice").value);
        var assemblyPrice = Number(document.getElementById("assemblyPrice").value);
        var structItem = {
            "id":ID,
            "nameItem": nameItem,
            "price": price,
            "width": width,
            "height": height,
            "depth": depth,
            "img_link": img_link
        }
        Post("http://localhost:5088/api/Items", structItem)
        var structService = {
            "id":ID,
            "deliveryTime": deliveryTime,
            "elevatorPrice": elevatorPrice,
            "handPrice": handPrice,
            "assemblyPrice": assemblyPrice,
        }
        Post("http://localhost:5088/api/Services", structService)
        window.location.reload( true ) ;
    }

    return (
        <Container>
            <div className={styles.container}>
            <div>
            <h2>Добавить товар</h2>
            <form className={styles.addTovar}>
                <input type='number' className={styles.input} id="ID" onClick={() => setSave(false)} placeholder='Артикул'  />
                <input type='text' className={styles.input} id="nameItem" onClick={() => setSave(false)} placeholder='Имя товара'  />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Цена товара' id='price' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Ширина' id='width' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Высота' id='height' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Глубина' id='depth' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Доставка' id='deliveryTime' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Стоимость доставки' id='elevatorPrice' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Стоимость подьема' id='handPrice' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Стоимость сборки' id='assemblyPrice' />
                <input type='text' className={styles.input} onClick={() => setSave(false)} placeholder='Ссылка на изображение' id='img_link' />
                <button type="button" className={styles.button} onClick={load}>Сoхранить</button>
                {save === true && <p>Сохранено</p>}
            </form>
            </div>
            <div>
            {loading && <p>loading...</p>}
          {!loading &&
            <ul className={styles.product_list}>
              {items.map(item => <AdmProductCard key={item.id.toString()} {...item} />)}
            </ul>}
            </div>
            </div>
        </Container>
    )
}

export default AdmPage