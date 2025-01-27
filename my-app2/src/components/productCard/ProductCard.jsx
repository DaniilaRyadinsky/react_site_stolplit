import React from 'react'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <Link className={styles.main_link} to={`/tovar/${props.id}`}>
            <li className={styles.card_unit}>
                <img src={props.img_link} alt="Плотва" className={styles.card_img} />
                <div className={styles.card_unit_description_container}>
                    <p className={styles.card_price}>{props.price}</p>
                    <h3 className={styles.card_name}>{props.nameItem}</h3>
                    <p className={styles.card_color}>Белий</p>
                    <p className={styles.card_dimensions}>Ширина <b>{props.width}</b> x Высота<b>{props.height}</b> x Глубина<b>{props.depth}</b></p>
                </div>
            </li>
        </Link>
    )
}

export default ProductCard