import styles from './home-services.module.scss';
import Link from 'next/link';
import SourcingIcon from '../../public/static/sourcing-icon.svg'
import OemIcon from '../../public/static/oem-services-icon.svg'
import Purchasing from '../../public/static/purchasing-icon.svg'
import QualityIcon from '../../public/static/quality-icon.svg'
import ShippingIcon from '../../public/static/shipping-icon.svg'
import ConsultingIcon from '../../public/static/consulting-icon.svg'
const HomeServices = () => {
    const services = [
        {
            id:1,
            title:"Sourcing",
            imageUrl: <SourcingIcon/>
        },
        {
            id:2,
            title:"OEM Services",
            imageUrl: <OemIcon/>
        },
        {
            id:3,
            title:"Purchasing",
            imageUrl: <Purchasing/>
        },
        {
            id:4,
            title:"Quality Management",
            imageUrl: <QualityIcon/>
        },
        {
            id:5,
            title:"Procurement Consulting",
            imageUrl: <ConsultingIcon/>
        },
        {
            id:6,
            title:"Shipping & Coordination",
            imageUrl: <ShippingIcon/>
        }
        
    ]
    return (
        <div className={styles.homeServicesWrapper}>
            <h1 className='big-dark-title'>Our Services</h1>
             <div className={styles.homeServicesHolder}>
            {services.map((service) => 
            
           
                <div key={service.id}>
                    
                    {service.imageUrl}
                    <h2 className='medium-dark-title'>{service.title}</h2>
                    
                </div>
                
            
            
            
            )}
            </div>
            <Link href='/services'>
            <a aria-label="Learn more" className='main-button'>Learn More</a>
            </Link>
        </div>
    )
}

export default HomeServices;