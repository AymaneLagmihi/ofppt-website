import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import logo from '../../public/logo.png';
import icon_user from '../../public/icon_user.png';
import styles from '../../styles/layout/header.module.css';



export default function Header() {
    return(
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>

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

            {/* <div className={styles.input}>
                <div className={styles.icon_user} >
                    <Image src={icon_user} alt="icon_user"/>
                </div>
                <input type="text" className={styles.input2} placeholder='Entrez votre nom complet'/>

            </div> */}
        </>
    )
}