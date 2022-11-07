import styles from '../styles/contact.module.scss';
import FacebookIcon from '../public/static/facebook-dark.svg';
import InstagramIcon from '../public/static/insta-dark.svg';
import LinkedInIcon from '../public/static/linked-dark.svg';
import Head from 'next/head';
import Map from '../components/map/map.component';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

const Contact = () => {
   
  const router = useRouter()
  useEffect(() => {
   
  })

    return (
        <div>
            <Head>
                <title>Contact Us | PSI | Logistics Company | Lebanon</title>
                 <meta name='title' content='Contact Us | PSI | Logistics Company | Lebanon'/>
                 
                 
                <meta name="description" content="PSI dedicated dedicated team of experts is here for you. Do reach out to us, should you need more details about our cargo and sourcing solutions, and we’ll be happy to help you out." />
            </Head>
           
            <div className={styles.bannerWrapper}>
                <div className={styles.bannerImg}>
                <Image  src='/static/contact-icon.svg' alt="Psi | Circle" width="300" height="500"/>
            </div>
                <h1 className='big-dark-title'>Contact</h1>
                <p className='medium-dark-title admarg'>Head Office</p>
                <a className='dark-p' href="tel:+9615450435">+961 5 450 435</a>
                <a className='dark-p' href="tel:+96176988285">+961 76 988 285 (WhatsApp)</a>
                <a  rel="noreferrer" className='dark-p' >Hazmieh, Camelia One center, 3<sup>rd</sup> floor, Office 304</a>
                <a className='dark-p' href="mailto:info@psisourcing.com">info@psisourcing.com</a>
                <div className={styles.socialMedia}>
                    <p className='medium-dark-title'>Follow Us</p>
                    <a aria-label="Facebook Link" target="_blank" rel="noreferrer" href="https://www.facebook.com/psisourcingintl/"><FacebookIcon/></a>
                    <a aria-label="Instagram Link" target="_blank" rel="noreferrer" href="https://www.instagram.com/psisourcing/"><InstagramIcon/></a>
                    <a aria-label="LinkedIn Link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/psisourcing/about/"><LinkedInIcon/></a>
                </div>
            </div>
            <Map/>
            <div id="inquiry" className={styles.contactWrapper}>
                <h2 className='big-dark-title'>Your Inquiry</h2>
               <form  action="https://psisourcing.us13.list-manage.com/subscribe/post?u=4ab337e365a6d7c7a2e5cf8a3&amp;id=b224fa45a9&amp;f_id=0074e0e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" >
                    <input  type="text" placeholder='Name + Surname'    name="NAME"  id="mce-NAME" required/>
                    <input type="text" placeholder='Company'  name="COMPANY"  id="mce-COMPANY" required/>
                    <input type="text" placeholder='Industry'  name="INDUSTRY"  id="mce-INDUSTRY" required/>
                    <input   type="text" placeholder='Name of the product'  name="PRODUCT"  id="mce-PRODUCT" required/>
                    <input   type="text" placeholder='Product specs'  name="SPECS"   id="mce-SPECS" required/>
                    <input type="text" placeholder='Country' name="COUNTRY"   id="mce-COUNTRY" required/>
                    <input   type="email"  placeholder='Email' name="EMAIL"  id="mce-EMAIL" required />
                    <input   type="number" placeholder='Phone' name="PHONE"  id="mce-PHONE" required/>
                    <textarea cols="30" rows="10" placeholder='Message' name="MESSAGE"  id="mce-MESSAGE"></textarea>
                    <button  className='main-button' type='submit' >Submit</button>
                    <div id="mce-responses" className="clear foot">
		<div className="response" id="mce-error-response" ></div>
		<div className="response" id="mce-success-response"></div>
	                </div> 
                 </form>
                 
                <Script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'/>
                <Script src='/mailchimp.js'/>
              
                
            </div>
        </div>
    )
}


export default Contact;