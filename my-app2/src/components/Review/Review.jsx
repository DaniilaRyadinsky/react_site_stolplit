import React from 'react'
import styles from './Review.module.css'
import star from '../img/Symbol_star_gold.svg.png'

const Review = (props) => {
    return (
        <li className={styles.item}>
            <div className={styles.mark}>
                <div className={styles.name}>{props.name}   {props.rating}</div>
                <img src={star} alt="" className={styles.star}></img>
            </div>
            <div className={styles.comment}>
                <p>{props.comment}</p>
            </div>
        </li>
    )
}

export default Review