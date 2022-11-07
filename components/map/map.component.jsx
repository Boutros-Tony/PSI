import styles from './map.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Mape from '../../public/static/earth.png';
const Map = () => {
    const [location, setLocation] = useState(false);
     const [location1, setLocation1] = useState(false);
      const [location2, setLocation2] = useState(false);
       const [location3, setLocation3] = useState(false);

    
    return (
        <div className={styles.mapWrapper}>
            <div className={styles.blockWrapper}>
           
        <Image alt='PSI Locations' 
                layout='responsive'
                width={2}
                height={1}
                
                priority
                src={Mape}/>
            </div>
            
                <div onClick={() => {setLocation(!location);setLocation1(false);setLocation2(false);setLocation3(false)}} className={styles.mapCircles + " " + styles.one}><div></div></div>
                <div onClick={() => {setLocation1(!location1);setLocation(false);setLocation2(false);setLocation3(false)}} className={styles.mapCircles + " " + styles.two}><div></div></div>
                <div onClick={() =>{ setLocation2(!location2);setLocation(false); setLocation1(false); setLocation3(false);}} className={styles.mapCircles + " " + styles.three}><div></div></div>
                <div onClick={() => {setLocation3(!location3);setLocation(false);setLocation1(false);setLocation2(false);}} className={styles.mapCircles + " " + styles.four}><div></div></div>
                <div className={styles.locationBox + " " + styles.one + " " + (location ? styles.show : styles.hide)}>
                    <h3>Premium Sourcing International Sas</h3>
                    <a className='dark-p' >13 bis avenue de la Motte-Picquet 75007 Paris, France</a>
                    <a className='dark-p' href="tel:+33144015656">Tel : +33 1 44 01 56 56</a>
                    <a className='dark-p' href="mailto:France@psisourcing.com">email: France@psisourcing.com</a>
                    <div onClick={() => setLocation(!location)} className={styles.locationCircle}>X</div>
                </div>
                <div className={styles.locationBox + " " + styles.two + " " + (location1 ? styles.show : styles.hide)}>
                    <h3>Premium Sourcing International <br /> (Offshore) SAL</h3>
                    <a className='dark-p' >Operation offices: Camelia One Building, 3rd Fl. <br/>Saiid Freiha Street, Hazmieh - Lebanon</a>
                    <a className='dark-p' href="tel:+961 5 450 435">Tel: +961 5 450 435, Mob. & WhatsApp: +961 76 988 285</a>
                    <a className='dark-p' href="mailto:Lebanon@psisourcing.com">email: Lebanon@psisourcing.com</a>
                    <div onClick={() => setLocation1(!location1)} className={styles.locationCircle}>X</div>
                </div>
                <div className={styles.locationBox + " " + styles.three + " " + (location2 ? styles.show : styles.hide)}>
                    <h3>Premium Sourcing <br /> International FZ-LLC</h3>
                    <a className='dark-p' >Al Hamra Industrial Zone FZ A2-210A RAK <br/> United Arab Emirates</a>
                    <a className='dark-p' href="tel:+971561514582">tel: +971 56 151 4582</a>
                    <a className='dark-p' href="mailto:UAE@psisourcing.com">email: UAE@psisourcing.com</a>
                    <div onClick={() => setLocation2(!location2)} className={styles.locationCircle}>X</div>
                </div>
                <div className={styles.locationBox + " " + styles.four + " " + (location3 ? styles.show : styles.hide)}>
                    <h3>Prime Resources Consulting</h3>
                    <a className='dark-p' >Suite 705,885 Renmin road, Zhonghua building, Shanghai 200010, China</a>
                    <a className='dark-p' href="tel:+8613641964497">Tel: +86 136 4196 4497</a>
                    <a className='dark-p' href="mailto:China@psisourcing.com">email: China@psisourcing.com</a>
                    <div onClick={() => setLocation3(!location3)} className={styles.locationCircle}>X</div>
                </div>
        </div>
    )
}

export default Map;