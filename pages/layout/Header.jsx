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
                            <li><Link className={styles.midleButton} href="/">Accueil</Link></li>
                            <li><Link className={styles.midleButton} href="/Empoloits">Emplois</Link></li>
                            <li><Link className={styles.midleButton} href="/Contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className={styles.header_right}>
                        <Link className={styles.headerConnect} href="/SeConnectez">SE CONNECTER</Link>
                    </div>
                        
            
                </div>
            </div>
        </>
    )
}