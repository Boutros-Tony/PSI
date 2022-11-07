import Banner from '../components/banner/banner.component';
import BannerImg from '../components/banner-image/banner-img.component';
import styles from '../styles/sustainability.module.scss';

import Head from 'next/head';
import { useRef,useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Sustainability = () => {
    return (
        <div>
            <Head>
                <title>Sustainable Solutions | PSI | Logistics Company | Lebanon</title>
                <meta name='title' content='Sustainable Solutions | PSI | Logistics Company | Lebanon' />
                <meta name='description' content='Sustainable business practices and policies are integral to our business strategy and embedded in our day-to-day operations.  We are building on our experience and leveraging our expertise to develop a more responsible business.' />
            </Head>

        <Banner title="Sustainability" 
        text1='We are increasing our efforts to reduce the impact of the environment and conduct responsible business practices with the highest ethical standards.' imgSrc='/static/sustainability-icon.svg' imgWidth='250' imgHeight="400"/>
      <BannerImg imgUrl='/static/sustainability-banner.webp' webImg='/static/sustainability-banner.jpg' sectionLink="sustainability-section"/>
      <div id="sustainability-section" className={styles.abilityWrapper}>
        <h2 className='big-dark-title'>Code of Business Conduct</h2>
    
       <Swiper
        cssMode={true}
        navigation={true}
       
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className={styles.slideBox}>
                <div className={styles.slideNumber}>1</div>
                <div>
                    <h3>Ethics & Compliance</h3>
                    <p>We make sure that our activities comply with all applicable laws and regulations and that our employees abide by our Code of Business Conduct and ethical standards.</p>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slideBox}>
                <div className={styles.slideNumber}>2</div>
                <div>
                    <h3>Workplace Safety</h3>
                    <p>The safety, wellbeing and professional development of all our employees is PSI’s top priority</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slideBox}>
                <div className={styles.slideNumber}>3</div>
                <div>
                    <h3>Climate Change and Environmental Management</h3>
                    <p>We aim to lower the ecological footprint in our tasks, such as CO2 emissions, noise pollution, and accidents. In this sense, we look to find a balance between financial growth, environment care, and the health of society.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slideBox}>
                <div className={styles.slideNumber}>4</div>
                <div>
                    <h3>Investing in Communities</h3>
                    <p>We actively support the local communities that our businesses touch, helping to ensure their wellbeing and development and avoiding infringing human rights in our work process.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slideBox}>
                <div className={styles.slideNumber}>5</div>
                <div>
                    <h3>Responsible Supply Chains</h3>
                    <p>We work on improving the efficiency throughout all  the supply chains to support our consumers various businesses in order to increase productivity and expand to wider markets while ensuring the protection of all-natural resources and keeping people safe. </p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
          </div>
    )
}

export default Sustainability;