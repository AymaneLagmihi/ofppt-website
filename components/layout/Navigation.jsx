import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';
import logo from '../../public/logo.png';
import styles from '../../styles/layout/header.module.css';
import Header from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import lottie from 'lottie-web';
// import { defineElement } from 'lord-icon-element';
// defineElement(lottie.loadAnimation);


export default function Navigation(){
    
    return(
        <>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.header_left}>
                        <Image src={logo} alt="logo-ofppt" className={styles.logo} />
                    </div>

                    <nav className={styles.navbar_center} >
                        <ul className={styles.navbar_links}>
                            <li className={styles.navbar_item}>
                                <Link href="/">
                                    <button  className={styles.navbar_link}>Accueil</button>
                                </Link>
                            </li>
                            <li className={styles.navbar_item}>
                                <Link href="/Emplois">
                                    <button className={styles.navbar_link}>Emplois</button>
                                </Link>
                            </li>
                            <li className={styles.navbar_item}>
                                <Link href="/Contact">
                                    <button className={styles.navbar_link}>Contact</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header_right}>
                        <Link href="/SeConnecter">
                            <button className={styles.headerConnect}>SE CONNECTER</button>
                        </Link>
                    </div>

                    {/* Responsive nav */}
                    <div>
                        <div className={styles.toggleIcon}></div>
                        <div className={styles.toggleIcon}></div>
                        <div className={styles.toggleIcon}></div>
                    </div>

                    <div className={styles.dropDown_menu}>
                            <li className={styles.navbar_item}>
                                <Link href="/">
                                    <button  className={styles.navbar_link}>Accueil</button>
                                </Link>
                            </li>
                            <li className={styles.navbar_item}>
                                <Link href="/Emplois">
                                    <button className={styles.navbar_link}>Emplois</button>
                                </Link>
                            </li>
                            <li className={styles.navbar_item}>
                                <Link href="/Contact">
                                    <button className={styles.navbar_link}>Contact</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/SeConnecter">
                                    <button className={styles.headerConnect}>SE CONNECTER</button>
                                </Link>
                            </li>
                    </div>

                </div>
            
            </div>

        </>
    )
}