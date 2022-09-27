import styles from '../styles/contact.module.scss';
import FacebookIcon from '../public/static/facebook-dark.svg';
import InstagramIcon from '../public/static/insta-dark.svg';
import LinkedInIcon from '../public/static/linked-dark.svg';
import Head from 'next/head';
import Map from '../components/map/map.component';
import Image from 'next/image';
import axios from 'axios';
import { useRef ,useState} from 'react';
const Contact = () => {
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [company, setCompany] = useState('');
      const [industry, setIndustry] = useState('');
      const [product, setProduct] = useState('');
      const [specs, setSpecs] = useState('');
      const [country, setCountry] = useState('');
      const [phone, setPhone] = useState('');
      const [message, setMessage] = useState('');
  const [state, setState] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading');

    try {
      const response = await axios.post('/api/subscribe', { email, name ,company,industry,product,specs,country,phone,message})
      console.log(response)
      setState('Success');
      setEmail('');
      setCompany('');
      setCountry("");
      setIndustry('');
      setMessage('');
      setName('');
      setPhone('');
      setProduct('');
      setSpecs('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      
      setState('Error')
    }
  }
    return (
        <div>
            <Head>
                <title>Contact | PSI</title>
             
 <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous" defer></script>
           
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
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/psisourcingintl/"><FacebookIcon/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/psisourcing/"><InstagramIcon/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/psisourcing/about/"><LinkedInIcon/></a>
                </div>
            </div>
            <Map/>
            <div id="inquiry" className={styles.contactWrapper}>
                <h2 className='big-dark-title'>Your Inquiry</h2>
                <form onSubmit={subscribe}>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name + Surname' value={name}   name="NAME"  id="mce-NAME" />
                    <input onChange={(e) => setCompany(e.target.value)} type="text" placeholder='Company' value={company} name="COMPANY"  id="mce-COMPANY" />
                    <input onChange={(e) => setIndustry(e.target.value)} type="text" placeholder='Industry' value={industry} name="INDUSTRY"  id="mce-INDUSTRY" />
                    <input onChange={(e) => setProduct(e.target.value)}  type="text" placeholder='Name of the product' value={product} name="PRODUCT"  id="mce-PRODUCT" />
                    <input onChange={(e) => setSpecs(e.target.value)}  type="text" placeholder='Product specs'  name="SPECS" value={specs} class="" id="mce-SPECS" />
                    <input onChange={(e) => setCountry(e.target.value)} type="text" placeholder='Country' name="COUNTRY" value={country} class="" id="mce-COUNTRY"/>
                    <input  onChange={(e) => setEmail(e.target.value)} type="email"  placeholder='Email' name="EMAIL" value={email} id="mce-EMAIL" required />
                    <input onChange={(e) => setPhone(e.target.value)}  type="number" placeholder='Phone' name="PHONE" class="" value={phone} id="mce-PHONE" />
                    <textarea onChange={(e) => setMessage(e.target.value)} cols="30" rows="10" value={message}placeholder='Message' name="MESSAGE"  id="mce-MESSAGE"></textarea>
                    <button onClick={subscribe} className='main-button' type='submit' >Submit</button>
                       {
            state === "Success" ? <h2 className={styles.success}>Thank you for your subscribtion!!</h2> : null
 
}
     {
            state === "Error" ? <h1>{errorMsg}</h1> : null
 
}
     


                </form>
            </div>
        </div>
    )
}

export default Contact;