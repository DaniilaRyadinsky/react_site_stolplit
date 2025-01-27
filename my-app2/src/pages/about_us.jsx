import React from 'react'
import roach from '../components/img/NEU_Roach.jpg'
import EmployerCard from '../components/EmployerCard/EmployerCard'
import Navnavbar from '../components/Navnavbar/Navnavbar'
import Container from '../components/container/Container'

import styles from './about_us.module.css'


const employers = [
  {
    name: 'Метела Данил',
    description: 'Главни',
    link: 'https://i.pinimg.com/originals/5e/d8/c1/5ed8c140441e92208801df885414b6bb.jpg'
  },
  {
    name: 'Неметела Данил',
    description: 'Главни но поменьбше',
    link: 'https://i.pinimg.com/736x/6c/f0/68/6cf068acf932be49ba4e765634e5c764.jpg'
  },
  {
    name: 'Ненеметела Данил',
    description: 'Главни но поменьбше поменьбше',
    link: 'https://i.pinimg.com/736x/49/f4/a4/49f4a441297f5d08bf6e1b41c2cedd69.jpg'
  },
]

const navlist = ['Наша компания', 'История фирмы', 'Сотрудники']

const AboutUs = () => {
  return (
    <Container>
      <Navnavbar list={navlist} />
      <div className={styles.content}>
        <div className={styles.zad2}>
          <h2 className={styles.content_title}>Наша компания</h2>
          <img src={roach} alt="Плотва" className={styles.zad2_img}></img>
          <p className={styles.content_text}>Мебельная фабрика «Столплит», основанная в 1999 году,
            представляет собой одну из крупнейших компаний, производство которой оснащено
            высокотехнологичным европейским оборудованием. «Столплит» занимает лидирующее
            место среди российских производителей мебели, который ежегодно выпускает
            новинки и радует покупателей прекрасной мебелью и отличным сервисом.</p>

          <p className={styles.content_text}>
            Сегодня мебель «Столплит» представлена в 13 регионах, работает более 2000
            фирменных магазинов «Столплит» по всей России и в ближнем зарубежье.</p>
          <p className={styles.content_text}>
            Современная производственная база, экологичные материалы и передовые технологии
            позволяют нам выпускать качественную продукцию по доступной цене, а успешная
            система управления помогает максимально быстро реагировать на внешние изменения
            и эффективно управлять рыночными процессами.
          </p>
          <p className={styles.content_text}>
            «Столплит» - это не просто мебель, а готовые интерьерные решения для любой комнаты.
            Мы делаем процесс обустройства дома простым и легким, сосредоточивая свое внимание
            на создании удобной, стильной и функциональной мебели. В нашем ассортименте более
            2500 позиций мебели: кухни, гостиные, спальни, прихожие, а также детские и
            молодежные модульные системы, шкафы-купе, компьютерные столы, ТВ-тумбы и многое
            другое. Мы предлагаем более 100 цветовых решений и разные стили: от классики до
            модерна.
          </p>
          <h2 className={styles.content_title}>История фирмы</h2>
          <p className={styles.content_text}>
            Сидел сидел главдир, потом как подумал и придумал.
          </p>
          <h2 className={styles.content_title}>Сотрудники</h2>
          <ul>
            {employers.map(employer => <EmployerCard {...employer} />)}
          </ul>
          <p className={styles.content_text}>МФ «Столплит» находится в непрерывном поиске новых решений,
            нестандартных идей и разработок в области производства и дизайна мебели. У нас
            всегда есть выгодные предложения для дилеров и покупателей. Скидки, акции,
            новинки и программы лояльности – это все о нас. Кроме того, мы предоставляем
            возможность создавать индивидуальные интерьеры в 3D-программе, заказывать мебель
            по каталогу или через интернет-магазин. Создавайте уют и гармонию в доме вместе
            с нами!</p>
        </div>

      </div>
    </Container>
  )
}

export default AboutUs