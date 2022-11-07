import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Banner from '../components/banner/banner.component';
import BannerImg from '../components/banner-image/banner-img.component';
import Certificate from '../components/certificate/certificate.component';
import Mission from '../components/mission/mission.component';
import HomeServices from '../components/home-services/home-services.component';
import Link from 'next/link';
import DarkAngle from '../public/static/dark-angle.svg'
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Worldwide Shipping | PSI | Logistics Company | Lebanon</title>
        <meta name='title' content='Worldwide Shipping | PSI | Logistics Company | Lebanon '/>
        <meta name="description" content="Premium Sourcing International is a leading import and logistics company providing products sourcing and inspection services to a wide range of industries." />
        
      </Head>
      <div className={styles.homeWrapper}>
      <Banner existButtHome={true} title="Sourcing Goods Across The World" text1='As a company dedicated to make global products accessible, our global experience, in-depth expertise, and resources have allowed us to assume a unique market position. We have served a large number of clients in more than 40 countries. ' text2="We aim to be a global organization that constantly remains a step ahead in dealing with change, creating new values and opportunities by making trade happen responsibly and innovatively." 
      imgSrc='/static/home-icon.svg' 
      imgWidth='200' 
      imgHeight="400">
        
        </Banner>
      <div className={styles.homeButton}>
        <Link href="/products">
      
          <a>
            <p>Products</p>
             <div className={styles.butArrow}><DarkAngle /></div>
            
            <picture>
            <source  srcSet="/static/soap-industry.webp" type="image/webp"/>
            <img src="/static/soap-industry.png" alt='Psi | Products'/>
            </picture>
          </a>
            </Link>
            <Link href="/services">
          <a>
            <p>Services</p>
            <div className={styles.butArrow}><DarkAngle /></div>
          
            <picture>
            <source  srcSet="/static/services-banner.webp" type="image/webp"/>
            <img src="/static/services-banner.jpg" alt='Psi | Services'/>
            </picture>
          </a>
          </Link>
      </div>
      </div>
      
      <BannerImg imgUrl='/static/home-banner.webp' webImg='/static/home-banner.jpg' sectionLink="certificate-section"/>
 
     <div id="certificate-section">    <Certificate id="certificate-section"/></div>
     <Mission/>
     <HomeServices/>
     
    </div>
  )
}

export default Home;
