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
                        <img src="/static/psi-white-logo.svg" alt="PSI Logo"/>
                        </Link>
                    
                    <p className='white-p'>Sourcing goods <br /> accross the world</p>
                    </div>
                    <div className={styles.footerSocialMedia}>
                    <a aria-label="Facebook Link" target="_blank" rel="noreferrer" href="https://www.facebook.com/psisourcingintl/"><FacebookIcon/></a>
                    <a aria-label="Instagram Link" target="_blank" rel="noreferrer" href="https://www.instagram.com/psisourcing/"><InstagramIcon/></a>
                    <a aria-label="LinkedIn Link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/psisourcing/about/"><LinkedInIcon/></a>
                    </div>
                </div>
            <div className={styles.footerRightColumn}>
                <div className={styles.footerGetInTouch}>
                <p className='white-p'>Get in touch</p>
                <a href="mailto:info@psisourcing.com">info@psisourcing.com</a>
                <a href="tel:+96105450435">+961 5 450435</a>
                <a href="tel:+96176988285">+961 76 988 285 (WhatsApp)</a>
                </div>
                <div className={styles.footerExplore}>
                <p className='white-p'>Explore</p>
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
               
                </div>
                
            </div>
             </div>
            <div className={styles.footerEnd}>
                <p className='white-p'>© 2023 PSI</p>
                
           
            </div>
            
        </div>
    )
}


export default Footer;