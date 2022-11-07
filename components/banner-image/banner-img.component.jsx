import Image from "next/image";
import styles from './banner-img.module.scss';
import Angle from '../../public/static/downside-arrow.svg';
import Link from "next/link";
const BannerImg = ({imgUrl,sectionLink,webImg}) => {
    return (
        <div className={styles.bannerImgHolder}>
            <div className={styles.scrollButton}>
                <Link href={`#${sectionLink}`}>
                    <a aria-label="Scroll Down" ><Angle/></a>
                </Link>
                
                
            </div>
            <picture>
  <source  srcSet={imgUrl} type="image/webp"/>
  <img src={webImg} alt="PSI Logistic"/>
        </picture>
            
        </div>
    )
}


export default BannerImg;