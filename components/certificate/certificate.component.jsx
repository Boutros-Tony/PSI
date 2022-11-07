import styles from './certificate.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const Certificate = () => {
    return (
        <div className={styles.certificateWrapper}>
            <div className={styles.certificateLeftColumn}>
                <h2 className='big-dark-title'>PSI: Premium Sourcing International</h2>
                <p className='dark-p'>PSI provides a comprehensive range of procurement, purchasing, and logistic services to businesses that want to experience the cost-related advantages of sourcing products from overseas.</p>
                <Link href='/about'>
                <a className='main-button'>About us</a>
                </Link>
            </div>
            <div className={styles.certificateRightColumn}>
                <div>
                <Image layout='fill' objectFit='contain' alt='Iso Certificate' src='/static/certificate.jpg' />
                </div>
                <p className='dark-p'>ISO certificate ISO 9001:201</p>
            </div>
        </div>
    )
}

export default Certificate;