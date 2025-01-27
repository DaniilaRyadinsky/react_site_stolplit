import React from 'react'
import Container from '../components/container/Container'
import { useState, useEffect } from 'react'
import ProductBusket from '../components/productBusket/ProductBusket'
import styles from './catalog.module.css'

const Busket = () => {
    const [items, setItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5088/api/Buskets/`)
            .then(res2 => (res2.json()).then((r) =>
                setItem(r)))
    }, [])

    console.log(items)
    return (
        <Container>
            <h2>Корзина</h2>

            {items.length === 0 && <p>Корзина Пуста</p>}
            <ul className={styles.product_list}>
                {items.map(item => <ProductBusket key={item.id} {...item} />)}
            </ul>
        </Container>
    )
}

export default Busket