import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import logo from '../../public/logo.png';
import icon_user from '../../public/icon_user.png';
import styles from '../../styles/layout/header.module.css';



export default function Header() {
    return(
        <>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.header_left}>
                        <Image src={logo} alt="logo-ofppt" className={styles.logo} />
                    </div>
                    
                    <nav className={styles.header_center}>
                        <ul>
                            <li><button className={styles.midleButton}>Accueil</button></li>
                            <li><button className={styles.midleButton}>Emplois</button></li>
                            <li><button className={styles.midleButton}>Contact</button></li>
                        </ul>
                    </nav>

                    <div className={styles.header_right}>
                        <button className={styles.headerConnect}>SE CONNECTER</button>
                    </div>
                        
            
                </div>
            </div>
        </>
    )
}