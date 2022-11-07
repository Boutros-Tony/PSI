import styles from './banner.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Banner = ({title,text1,text2,imgSrc,imgHeight,imgWidth,existButt,existButtHome}) => {
    return (
        <div className={styles.bannerWrapper}>
            <h1 className="big-dark-title">{title}</h1>
            <p className='dark-p'>{text1}</p>
            <p className='dark-p'>{text2}</p>
            {
                existButt ? <div className={styles.buttonsHolder}>
                   
                <a aria-label="Our catalog" className='main-button-light' href='/static/PSI-Brochure.pdf' target='_blank'>Our Catalog</a>
                <Link href="/contact#inquiry"><a aria-label="Your Inquiry" className='main-button-light'>Your Inquiry</a></Link>
            </div> : null
            }
            {
                existButtHome ? <div className={styles.buttonsHolderHome}>
                    <Link href="/products">
                        <a aria-label="Products" className='main-button-light'>Products </a>
                       
                    </Link>
                    <Link href="/services"><a aria-label="Services" className='main-button-light'>Services</a></Link>
                
            </div> : null
            }

            
            <div className={styles.bannerImg}>
                <Image  src={imgSrc} alt="Psi | Circle" width={imgWidth} height={imgHeight}/>
            </div>
            
        </div>
    )
}

export default Banner;