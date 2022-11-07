import Head from "next/head";
import Banner from '../components/banner/banner.component';
import BannerImg from '../components/banner-image/banner-img.component';
import styles from '../styles/services.module.scss';

import SourcingIcon from '../public/static/sourcing-icon.svg'
import OemIcon from '../public/static/oem-services-icon.svg'
import Purchasing from '../public/static/purchasing-icon.svg'
import QualityIcon from '../public/static/quality-icon.svg'
import ShippingIcon from '../public/static/shipping-icon.svg'
import ConsultingIcon from '../public/static/consulting-icon.svg'
import RightAngle from '../public/static/direction-down.svg'

import { useState} from "react";
const Services = () => {
      const [open, setOpen] = useState(false);
    const services = [
        {
            id:1,
            title:"Sourcing",
            status: false,
            imageUrl: <SourcingIcon/>,
            text:"In today’s highly competitive marketplace, it has become crucial for businesses to offer personalized, branded products, which will help them position themselves against their competitors and seize a bigger market share. PSI helps you achieve this objective in a cost-effective and efficient manner with our OEM and ODM services.Whether you want to customize a product by printing your brand name or logo on it, or you already have a comprehensive product idea and you want our assistance to realize it, we will utilize our vast experience and extensive knowledge to help you achieve your product vision."
        },
        {
            id:2,
            title:"OEM Services",
            status: false,
            imageUrl: <OemIcon/>,
            text:"Sourcing products can prove to be a very complex and tedious process for businesses of all sizes. Big firms may not have the time to address the complexities associated with the process themselves, while medium-to-small-sized enterprises may have limited resources and little or no experience of global sourcing. Leveraging on our global sourcing network and expertise, we get quotes from the most reliable suppliers and select the one that offers the best quality products at the most reasonable rates."
        },
        {
            id:3,
            title:"Purchasing",
            status: false,
            imageUrl: <Purchasing/>,
            text:"We provide international and domestic purchasing services for a wide variety of products and categories, from raw materials to finished products, plastics, packaging, machinery, spare parts, and more."
        },
        {
            id:4,
            status: false,
            title:"Quality Management",
            imageUrl: <QualityIcon/>,
            text:"Through our monitoring system, we ensure that your required specifications are respected Sourcing products for a foreign supplier involves a great deal of risk, particularly when you are working with a supplier for the first time. PSI helps you feel more confident by working first with our existing list of trusted suppliers and inspecting the quality of merchandise when it's needed."
        },
        {
             id:5,
            status: false,
            title:"Procurement Consulting",
            imageUrl: <ConsultingIcon/>,
            text:"We offer procurement solutions and assistance in various industries on an on-demand basis to help our clients' businesses become more effective, profitable, and successful. We help you achieve your business goals by improving your bottom line through cost reduction and generating new revenue streams. PSI's experience in procurement aims at developing your products and helping you launch new ones by analyzing the market needs and identifying the most appropriate items for your region."
        },
        {
             id:6,
            status: false,
            title:"Shipping & Coordination",
            imageUrl: <ShippingIcon/>,
            text:"We assist you with the logistical and shipping procedures, including all required documents needed for customs clearance. We source raw materials, semi-finished and finished products at competitive prices according to our clients' specifications. We strive to provide our customers with the best quality, pricing, and cost savings possible, so we solicit bids from leading suppliers to determine the most competitive quote and delivery time. "
        }

    ]
    

    const [servicesArray , setServicesArray] = useState(services);

    let activeClass = {
        height:"400px"
    }
    const handleHeight = async () => {

    setOpen(!open)

   }
 
const updateObjectInArray = async (event) => {
   
    const target = event.target.getAttribute('data-attr');
    
 await   setServicesArray(current =>
      current.map(obj => {
        
        if (obj.id == target && !obj.status) {
          return {...obj, status: true};
        }  else if (obj.id == target && obj.status){
            return {...obj, status: false};
        }

        return obj;
      }),
    );
    handleHeight();
  };



    return (
        <div>
            <Head>
                <title>Import & Logistics Services | PSI | Lebanon</title>
                <meta name='title' content='Import & Logistics Services | PSI | Lebanon'/>
                <meta name="description" content="At Premium Sourcing International, Our primary objective is to help you find reliable, cost-effective, and efficient solutions to import goods from overseas. Check our wide range of logistics services to help you get the needed expertise and solutions for your business." />
            </Head>

        <Banner title="Our Services" text1='At PSI our primary objective is to help you find reliable, cost-effective, and efficient solutions to import goods from overseas.' imgSrc='/static/services-icon.svg' imgWidth='250' imgHeight="350"/>
      <BannerImg imgUrl='/static/services-banner.webp' webImg='/static/services-banner.png' sectionLink="services-section"/>
       <div id="services-section" className={styles.servicesWrapper}>
        <h2 className="big-dark-title">A Safer More Reliable Way To Import Goods</h2>
        <div className={styles.servicesHolder}>
        {servicesArray.map((service) =>
            

                <div   key={service.id} onClick={updateObjectInArray} data-attr={service.id} className={service.status ? styles.servicesBox  + " " + styles.activeClasss : styles.servicesBox}>



                    <div className={styles.serviceBox}>
                        <div className={styles.miniBox}> {service.imageUrl}
                    <h2 className='medium-dark-title'>{service.title}</h2></div>
                   
                    <RightAngle className={service.status ? styles.rightIcon + " " + styles.grow : styles.rightIcon  }/>
                    </div>
                    
                        <p className={!service.status ? "dark-p " + styles.servicesPar : "dark-p " + styles.servicesPar + " " + styles.show}>{service.text}</p>
                   



                </div>



            
            )}
            </div>


      </div>
      
        </div>
    )
}

export default Services;