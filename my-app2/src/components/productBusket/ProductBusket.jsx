import React, { useEffect, useState } from 'react'
import styles from './ProductBusket.module'
import ProductCard from '../productCard/ProductCard'
import BtnReg from '../BtnReg/BtnReg'

const ProductBusket = (props) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5088/api/Items/${props.id}`)
            .then(res2 => (res2.json()).then((r) =>
                setItem(r)))
    }, [])

    async function Delete() {
        try {
            // Выполняем DELETE-запрос к серверу
            const response = await fetch(`http://localhost:5088/api/Buskets/${props.id}`, {
              method: 'DELETE',
            });
      
            if (response.ok) {
            } else {
              console.error('Ошибка при удалении карточки:', response.statusText);
            }
          } catch (error) {
            console.error('Ошибка сети:', error);
          }
          window.location.reload( true ) ;
    }

    return (
        <div>
            <ProductCard key={item.id} {...item}></ProductCard>
            <BtnReg onClick={Delete} >Удалить</BtnReg>
        </div>
    )
}

export default ProductBusket