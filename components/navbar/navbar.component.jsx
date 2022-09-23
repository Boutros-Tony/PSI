import styles from './navbar.module.scss';
import Logo from '../../public/static/psi-logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import WhiteLogo from '../../public/static/psi-white-logo.svg';
const Navbar = () => {
    const router = useRouter();
const currentRoute = router.pathname;
const [menu ,setMenu] = useState(false);
const handleMenu = () => {
  
    if(menu){
        setMenu(false)
         document.body.classList.remove('overf');
    } else {
         document.body.classList.add('overf');
         setMenu(true)
    }
    
}
    return (
        <div className={styles.navbarWrapper}>
            {!menu ? <Link href="/"><Logo className={styles.log}/></Link> : <Link href="/"><WhiteLogo width="133" height="54" className={ !menu ? styles.whiteLogo : styles.whiteLogo + " " + styles.showL}/></Link>}
            <div className={styles.navlinksWrapper}>
                <Link href='/'>
                    <a className={currentRoute === "/" ? styles.active : ""}>Home</a>
                </Link>
                <Link href='/products'>
                    <a className={currentRoute === "/products" ? styles.active : ""}>Products</a>
                </Link>
                <Link href='/services'>
                    <a className={currentRoute === "/services" ? styles.active : ""}>Services</a>
                </Link>
                <Link href='/about'>
                    <a className={currentRoute === "/about" ? styles.active : ""}>About</a>
                </Link>
                <Link href='/sustainability'>
                    <a className={currentRoute === "/sustainability" ? styles.active : ""}>Sustainability</a>
                </Link>
                <Link href='/contact'>
                    <a className={currentRoute === "/contact" ? styles.active : ""}>Contact</a>
                </Link>

            </div>
            <div onClick={handleMenu} className={styles.burgerMenu}>
                <div  className={menu ? styles.rotate : ""}></div>
                <div className={menu ? styles.rotateR : ""}></div>
            </div>
            <div className={!menu ? styles.phoneMenu : styles.phoneMenu + " " + styles.show}>
                <Link href='/'>
                    <a onClick={handleMenu} className={currentRoute === "/" ? styles.active : ""}>Home</a>
                </Link>
                <Link href='/products'>
                    <a onClick={handleMenu} className={currentRoute === "/products" ? styles.active : ""}>Products</a>
                </Link>
                <Link href='/services'>
                    <a onClick={handleMenu} className={currentRoute === "/services" ? styles.active : ""}>Services</a>
                </Link>
                <Link href='/about'>
                    <a onClick={handleMenu} className={currentRoute === "/about" ? styles.active : ""}>About</a>
                </Link>
                <Link href='/sustainability'>
                    <a onClick={handleMenu} className={currentRoute === "/sustainability" ? styles.active : ""}>Sustainability</a>
                </Link>
                <Link  href='/contact'>
                    <a onClick={handleMenu} className={currentRoute === "/contact" ? styles.active : ""}>Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;