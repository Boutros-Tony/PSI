import Head from "next/head";
import Banner from '../components/banner/banner.component';
import BannerImg from '../components/banner-image/banner-img.component';
import Image from "next/image";
import styles from '../styles/products.module.scss';
import Link from "next/link";
import RightAngle from '../public/static/right-angle.svg';
const Products = () => {
    const products = [
         {
        title:"Industrial Chemicals",
        imageUrl:"/static/industrial-chemicals.jpg"
        },{
        title:"Food Additives",
        imageUrl:"/static/food-additives.jpg"
        },{
        title:"Soap Industry",
        imageUrl:"/static/soap-industry.png"
        },{
        title:"Plastic & Packaging Industry",
        imageUrl:"/static/Plastic-Packaging-Industry.jpg"
        },{
        title:"Furniture & Mattresses Manufacturing Industry",
        imageUrl:"/static/Furniture-Mattresses-Manufacturing-Industry.jpg"
        },{
        title:"Industrial Machinery, Moulds & Equipments",
        imageUrl:"/static/Industrial-Machinery-Moulds-Equipments.jpg"
        },
        {
        title:"Iron & Steel Wires",
        imageUrl:"/static/Iron-Steel-Wires.jpg"
        }
    ]
    return (
        <div>
            <Head>
                <title>Our Products | PSI</title>
            </Head>
        <Banner existButt={true} title="Our Products" text1='Our decision to serve a broader range of industries has helped us acquire skills and resources. We have extended our reach to a large number of suppliers based in different countries. ' text2="
            This extensive network of suppliers allows us to negotiate better prices for our customers. In addition to this, our global reach also enables us to cater to clients, with very specific product requirements." imgSrc='/static/products-icon.png' imgWidth='200' imgHeight="300"/>
      <BannerImg imgUrl='/static/products-banner.jpg' sectionLink="products-section"/>
      <div id="products-section" className={styles.productWrapper}>
        <h2 className="big-dark-title">Our Products</h2>
        <div className={styles.productsHolder}>
        {products.map((service) => 
            <>
           
                <div className={styles.productBox}>
                    
                    <div className={styles.productImage}>
                        <Image alt={service.title} layout='fill' objectFit="cover"  src={service.imageUrl}/>
                    </div>
                    <div className={styles.productTitle}><h2 className='medium-dark-title'>{service.title}</h2></div>
                    
                    
                </div>
                
            
            
            </>
            )}
            </div> 
        
      </div>
        </div>
    )
}

export default Products;