import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import WhiteLogo from '../../public/static/psi-white-logo.svg';
import FacebookIcon from '../../public/static/facebook-icon.svg';
import InstagramIcon from '../../public/static/instagram-icon.svg';
import LinkedInIcon from '../../public/static/linkedIn-icon.svg';
const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerRows}>
                <div className={styles.footerLeftColumn}>
                    <div className={styles.footerLogoHolder}>
                        <Link href="/" >
                        <WhiteLogo style={{cursor:"pointer"}}/>
                        </Link>
                    
                    <p className='white-p'>Sourcing goods <br /> accros the world</p>
                    </div>
                    <div className={styles.footerSocialMedia}>
                    <a target="_blank" rel="noreferrer" href="http://facebook.com"><FacebookIcon/></a>
                    <a target="_blank" rel="noreferrer" href="http://instagram.com"><InstagramIcon/></a>
                    <a target="_blank" rel="noreferrer" href="http://facebook.com"><LinkedInIcon/></a>
                    </div>
                </div>
            <div className={styles.footerRightColumn}>
                <div className={styles.footerGetInTouch}>
                <h4 className='white-p'>Get in touch</h4>
                <a href="mailto:info@psisourcing.com">info@psisourcing</a>
                <a href="tel:+96105450435">+961 5 450435</a>
                </div>
                <div className={styles.footerExplore}>
                <h4 className='white-p'>Explore</h4>
                <div className={styles.footerSiteMap}>
                    <Link href='/about'>
                        <a className='white-p' >About</a>
                    </Link>
                    <Link href='/products'>
                         <a className='white-p' >Products</a>
                    </Link>
                    <Link href='/services'>
                         <a className='white-p' >Services</a>
                    </Link>
                    <Link href='/sustainability'>
                         <a className='white-p' >Sustainability</a>
                    </Link>
                    <Link href='/contact'>
                         <a className='white-p' >Contact</a>
                    </Link>
                </div>
                <a className='white-p' target="_blank" rel="noreferrer" href="https://goo.gl/maps/fS9g6dUeYWVhKfow7">Hazmieh, Camilia Building, 3rd Floor</a>
                </div>
                
            </div>
             </div>
            <div className={styles.footerEnd}>
                <p className='white-p'>© 2022 PSI</p>
                <a target="_blank" rel="noreferrer" className='white-p' href="https://creativecouple.com">Site by creative couple</a>
           
            </div>
            
        </div>
    )
}


export default Footer;