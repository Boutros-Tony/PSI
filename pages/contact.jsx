import styles from '../styles/contact.module.scss';
import FacebookIcon from '../public/static/facebook-dark.svg';
import InstagramIcon from '../public/static/insta-dark.svg';
import LinkedInIcon from '../public/static/linked-dark.svg';
import Head from 'next/head';
import Map from '../components/map/map.component';
import Image from 'next/image';
const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact | PSI</title>
            </Head>
            <div className={styles.bannerWrapper}>
                <div className={styles.bannerImg}>
                <Image  src='/static/contact-icon.png' alt="Psi | Circle" width="300" height="500"/>
            </div>
                <h1 className='big-dark-title'>Contact</h1>
                <h3 className='medium-dark-title'>Head Office</h3>
                <a className='dark-p' href="tel:+9615450435">+961 5 450 435</a>
                <a target="_blank" without rel="noreferrer" className='dark-p' href="https://goo.gl/maps/fS9g6dUeYWVhKfow7">Hazmieh, Camilia Building, 3rd Floor</a>
                <a className='dark-p' href="mailto:info@psisourcing.com">info@psisourcing</a>
                <div className={styles.socialMedia}>
                    <h3 className='medium-dark-title'>Follow Us</h3>
                    <a href="http://"><FacebookIcon/></a>
                    <a href="http://"><InstagramIcon/></a>
                    <a href="http://"><LinkedInIcon/></a>
                </div>
            </div>
            <Map/>
            <div id="inquiry" className={styles.contactWrapper}>
                <h2 className='big-dark-title'>Your Inquiry</h2>
                <form action="">
                    <input type="text" placeholder='Name + Surname' />
                    <input type="text" placeholder='Company' />
                    <input type="text" placeholder='Industry' />
                    <input type="text" placeholder='Name of the product' />
                    <input type="text" placeholder='Product specs' />
                    <input type="text" placeholder='Country' />
                    <input type="email" placeholder='Email' />
                    <input type="number" placeholder='Phone' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button className='main-button' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;