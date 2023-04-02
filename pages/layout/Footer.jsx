import Image from 'next/image';
import logo from '../../public/logo.png';
import styles from '../../styles/layout/footer.module.css';

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.leftFooter}>
                    <Image src={logo} alt='logo-ofppt' className={styles.logo}/>
                    <button className={styles.contacteButton}>Contactez nous</button>
                </div>

                <div className={styles.centerFooter}>
                    <h1>Les devloppeurs de ce sites</h1>
                    <p>Clickez sur le liens pour savoir plus d`information de contact</p>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={styles.rightFooter}>
                   <h1>Coordonnée</h1>
                   <div>
                        <div className={styles.icones}>
                            <i></i>
                        </div>
                        <p>268J+PJ Salé</p>
                   </div>

                   <div>
                        <div className={styles.icones}>
                            <i></i>
                        </div>
                        <p>+212 6 93 24 20 70</p>
                   </div>
                </div>
            </div>
        </>
    )
    
}