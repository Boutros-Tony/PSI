import Banner from '../components/banner/banner.component';
import BannerImg from '../components/banner-image/banner-img.component';
import styles from '../styles/about.module.scss';
import Head from 'next/head';
const About = () => {
    return (
        
        <div>
            <Head>
                <title>About Us | PSI</title>
            </Head>
        <Banner title="PSI: Premium Sourcing International" text1='PSI provides a comprehensive range of procurement, purchasing, and logistic services to businesses that want to experience the cost-related advantages of sourcing products from overseas.' 
        text2="Our primary objective is to constantly remain one step ahead in dealing with market changes and needs by creating new opportunities and adapting to changes.
We offer a one-stop solution to businesses of all sizes operating across a broad spectrum of industries. We rely on our extensive network as well as our demonstrated expertise in meeting the needs of a diverse range of businesses." imgSrc='/static/about-icon.png' imgWidth='250' imgHeight="500"/>
        <BannerImg imgUrl='/static/about-banner.jpg' sectionLink="about-section"/>
        <div id="about-section" className={styles.aboutWrapper}>
            <h2 className='big-dark-title'>Our Vision</h2>
            <div className={styles.orangeBg}>
                <h3>Our vision is to be recognized as a global leader in procurement and product sourcing solutions while providing outstanding service and ensuring client satisfaction across a wide spectrum of industries.</h3>
            </div>
            <h2 className='big-dark-title'>Why Us</h2>
            <p className='dark-p'>• PSI is an outcome-oriented company that aims to make global procurement a cost-effective and efficient business for its customers.
<br />
<br />
• We offer end-to-end solutions for all our targeted industries. 
<br />
<br />
• We ensure you complete transparency throughout the process. 
<br />
<br />
• Our team comprises of native English, French, Chinese, and Arabic speakers who strive to help you overcome all the cultural and linguistic barriers. </p>
        </div>
        </div>
       
    )
}

export default About;