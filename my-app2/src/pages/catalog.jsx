import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/productCard/ProductCard'
import Navnavbar from '../components/Navnavbar/Navnavbar'
import styles from './catalog.module.css'
import Container from '../components/container/Container'
import Sslider from '../components/Sslider/Sslider'
 

const navlist = ['Кухни', 'Шкафы', "Диваны", "Кровати", "Комоды", "Матрасы", "Прихожие"]

const Catalog = () => {

  let search_res

  const params = useParams()
    search_res = params.search

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


  const filteredItems = items.filter(item =>
    item.nameItem.toLowerCase().includes(search_res.toLowerCase())
  );


  return (
    <Container search={search_res}>  
      <Navnavbar list={navlist} />
      <div className={styles.content}>
        <Sslider/>
          {loading && <p>loading...</p>}
          {!loading &&
            <ul className={styles.product_list}>
              {filteredItems.map(item => <ProductCard key={item.id.toString()} {...item} />)}
            </ul>}
      </div>
    </Container>
  )
}

export default Catalog