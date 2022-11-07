import Head from "next/head";
import Banner from '../components/banner/banner.component';
import BannerImg from '../components/banner-image/banner-img.component';
import Image from "next/image";
import styles from '../styles/products.module.scss';

const Products = () => {
    const products = [
         {
        title:"Industrial Chemicals",
        imageUrl:"/static/industrial-chemicals.jpg",
        webImg:"/static/industrial-chemicals.webp"
        },{
        title:"Food Additives",
        imageUrl:"/static/food-additives.jpg",
        webImg:"/static/food-additives.webp"
        },{
        title:"Soap and Detergent",
        imageUrl:"/static/soap-industry.png",
        webImg:"/static/soap-industry.webp"
        },{
        title:"Plastic & Packaging Industry",
        imageUrl:"/static/Plastic-Packaging-Industry.jpg",
        webImg:"/static/Plastic-Packaging-Industry.webp"
        },{
        title:"Furniture & Mattresses Manufacturing Industry",
        imageUrl:"/static/Furniture-Mattresses-Manufacturing-Industry.jpg",
        webImg:"/static/Furniture-Mattresses-Manufacturing-Industry.webp"
        },{
        title:"Industrial Machinery, Moulds & Equipments",
        imageUrl:"/static/Industrial-Machinery-Moulds-Equipments.jpg",
        webImg:"/static/Industrial-Machinery-Moulds-Equipments.webp"
        },
        {
        title:"Iron & Steel Wires",
        imageUrl:"/static/Iron-Steel-Wires.jpg",
        webImg: "/static/Iron-Steel-Wires.webp"
        }
    ]
    return (
        <div>
            <Head>
                <title>Products | Global Product Sourcing | PSI | Lebanon </title>
                 <meta name='title' content='Products | Global Product Sourcing | PSI | Lebanon '/>
                <meta name="description" content="PSI dedicated dedicated team of experts is here for you. Do reach out to us, should you need more details about our cargo and sourcing solutions, and we’ll be happy to help you out." />
            </Head>
        <Banner existButt={true} title="Our Products" text1='Our decision to serve a broader range of industries has helped us acquire skills and resources. We have extended our reach to a large number of suppliers based in different countries. ' text2="
            This extensive network of suppliers allows us to negotiate better prices for our customers. In addition to this, our global reach also enables us to cater to clients, with very specific product requirements." imgSrc='/static/products-icon.svg' imgWidth='200' imgHeight="300"/>
      <BannerImg imgUrl='/static/products-banner.webp' webImg='/static/products-banner.jpg' sectionLink="products-section"/>
      <div id="products-section" className={styles.productWrapper}>
        <h2 className="big-dark-title">Our Products</h2>
        <div className={styles.productsHolder}>
        {products.map((service) => 
           
           
                <div className={styles.productBox} key={service.title}>
                    
                    <div className={styles.productImage}>
                       
                        <picture>
                        <source  srcSet={service.webImg} type="image/webp"/>
                        <img src={service.imageUrl} alt={service.title + " | PSI"}/>
                        </picture>
                    </div>
                    <div className={styles.productTitle}><h2 className='medium-dark-title'>{service.title}</h2></div>
                    
                    
                </div>
                
            
            
            
            )}
            </div> 
        
      </div>
        </div>
    )
}

export default Products;