import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Sslider.module.css'
import page1 from '../img/3364kh1000_main_aktsiya_dekabr_yanvar-_12_24_.webp'
import page2 from '../img/main_novinka_assol-novyy-tsvet-3364kh1000-_12_24_.webp'
import page3 from '../img/main_novinka_montana-3364kh1000-_12_24_.webp'

const Sslider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      return (
        <Slider className={styles.slider} {...settings}>
          <div className={styles.slider_container}>
            <img src={page1} alt='slide-1' />
          </div>
          <div>
            <img src={page2} alt='slide-2' />
          </div>
          <div>
            <img src={page3} alt='slide-3' />
          </div>
        </Slider>
      );
}

export default Sslider