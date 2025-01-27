import {React, useState, useEffect} from 'react'
import Container from '../components/container/Container'
import Review from '../components/Review/Review';
import styles from './rewiew.module.css'

const reviews = [
    {
        id: 1,
        name: "Анна",
        rating: 5,
        comment: "Отличный магазин! Купила диван, качество на высоте и доставка была быстрой."
    },
    {
        id: 2,
        name: "Игорь",
        rating: 4,
        comment: "Хороший выбор мебели, но цены могли бы быть ниже. В целом, я доволен покупкой."
    },
    {
        id: 3,
        name: "Мария",
        rating: 3,
        comment: "Нормальный магазин, но обслуживание оставляет желать лучшего. Мебель понравилась."
    },
    {
        id: 4,
        name: "Сергей",
        rating: 5,
        comment: "Превосходное качество! Я купил стол и стулья, очень доволен."
    },
    {
        id: 5,
        name: "Елена",
        rating: 2,
        comment: "Купила кресло, но через месяц оно начало скрипеть. Не рекомендую."
    }
];

const ReviewPage = () => {


  return (
    <Container>
    <h2>Отзывы</h2>
    <ul className={styles.review_list}>
        {reviews.map(item => <Review key={item.id.toString()} {...item} />)}
    </ul>
        
    </Container>
  )
}

export default ReviewPage