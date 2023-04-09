import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import styles from '../../styles/layout/header.module.css';
import React, {useState, useEffect, useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false);

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
                    
                    <div className={styles.toggle} onClick={() => {setIsOpen(!isOpen)}}>
                        <div className={styles.toggleIcon}></div>
                        <div className={styles.toggleIcon}></div>
                        <div className={styles.toggleIcon}></div>
                    </div>
                    <AnimatePresence>
                        {
                            isOpen && (
                                <>
                                    <motion.div 
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        className={styles.dropDown_menu}
                                    >
                                        <div className={styles.allLinks}>
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
                                            <li className={styles.navbar_item}>
                                                <Link href="/SeConnecter">
                                                    <button className={styles.headerConnect}>SE CONNECTER</button>
                                                </Link>
                                            </li>
                                        </div>
                                    </motion.div>
                                </>
                            )
                        }
                    </AnimatePresence>

                </div>
            
            </div>

        </>
    )
}