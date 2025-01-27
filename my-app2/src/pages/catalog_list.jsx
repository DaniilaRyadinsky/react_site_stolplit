import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard/ProductCard'
import Navnavbar from '../components/Navnavbar/Navnavbar'
import styles from './catalog.module.css'
import Container from '../components/container/Container'
import Sslider from '../components/Sslider/Sslider'


// const items= [
//   {
//     name: 'Кухня Деми Белый / Дуб Сонома 1 м (Дуб Сонома/Белый)',
//     color: 'Цвет: Белый',
//     price: '7490р',
//     img_link: 'https://www.stolplit.ru/upload/resize_cache/iblock/622/xzzx2vdpm5on1vpt1tf5wjgiwu20uxor/816_700_1/00000324157-detail.webp'
//   },
//   {
//     name: 'Кухня Деми Белый / Дуб Сонома 1 м (Дуб Сонома/Белый)',
//     color: 'Цвет: Белый',
//     price: '7490р',
//     img_link: 'https://www.stolplit.ru/upload/resize_cache/iblock/feb/9e4gxfwx3pvzg002hhsalidsyfcnwe93/816_700_1/00000331070-detail.webp'
//   },
//   {
//     name: 'Кухонный гарнитур Деми.Н Белый/Перлино (Белый)',
//     color: 'Цвет: Дуб Сонома/Белый',
//     price: '7490р',
//     img_link: 'https://www.stolplit.ru/upload/resize_cache/iblock/feb/9e4gxfwx3pvzg002hhsalidsyfcnwe93/816_700_1/00000331070-detail.webp'
//   },
//   {
//     name: 'Кухонный гарнитур Деми.Н Белый/Перлино (Белый)',
//     color: 'Цвет: Дуб Сонома/Белый',
//     price: '7490р',
//     img_link: 'https://www.stolplit.ru/upload/resize_cache/iblock/906/816_700_1/regina24_kuhnya_begeviy_pesok_mdf_beliy_matoviy.webp'
//   }
// ]

const navlist = ['Кухни', 'Шкафы', "Диваны", "Кровати", "Комоды", "Матрасы", "Прихожие"]

const CatalogList = () => {
    
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
  return (
    
    <Container >  
      <Navnavbar list={navlist} />
      <div className={styles.content}>
        <Sslider/>
          {loading && <p>loading...</p>}
          {!loading &&
            <ul className={styles.product_list}>
              {items.map(item => <ProductCard key={item.id.toString()} {...item} />)}
            </ul>}
      </div>
    </Container>
  )
}

export default CatalogList