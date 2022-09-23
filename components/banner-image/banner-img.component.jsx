import Image from "next/image";
import styles from './banner-img.module.scss';
import Angle from '../../public/static/downside-arrow.svg';
import Link from "next/link";
const BannerImg = ({imgUrl,sectionLink}) => {
    return (
        <div className={styles.bannerImgHolder}>
            <div className={styles.scrollButton}>
                <Link href={`#${sectionLink}`}>
                    <a ><Angle/></a>
                </Link>
                
                
            </div>
            <Image layout="fill" objectFit="cover"  alt="Psi Image Banner" src={imgUrl}/>
        </div>
    )
}


export default BannerImg;