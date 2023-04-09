import Image from 'next/image';
import logo from '../../public/logo.png';
import iconeDev from '../../public/iconeDev.png';
import styles from '../../styles/layout/footer.module.css';

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.allFooter}>
                    <div className={styles.leftFooter}>
                        <Image src={logo} alt='logo-ofppt' className={styles.logo}/>
                        <p>Office de la Formation Professionnelle et du travail Al Karia</p>
                        <button className={styles.contacteButton}>Contactez nous</button>
                    </div>

                    <div className={styles.centerFooter}>
                        <h1>Les devloppeurs de ce sites</h1>
                        <p>Clickez sur le liens pour savoir plus d`information de contact</p>
                        <div className={styles.devloppeurs}>

                            <div className={styles.coordonne}>
                                
                                <Image src={iconeDev} alt='logo-ofppt' className={styles.iconeDev}/>
                                <p>Aymane Lagmihi</p>                               
                            </div>

                            <div className={styles.coordonne}>
                                
                                <Image src={iconeDev} alt='logo-ofppt' className={styles.iconeDev}/>
                                <p>Simo Bahri</p>  
                            </div>
                            <div className={styles.coordonne}>
                                
                                <Image src={iconeDev} alt='logo-ofppt' className={styles.iconeDev}/>
                                <p>Hisham Talha</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightFooter}>
                        <h1>Coordonnée</h1>
                        <div className={styles.info}>
                        <div className={styles.coordonne}>
                                <div className={styles.icones}>
                                    <i></i>
                                </div>
                                <p>268J+PJ Salé</p>
                        </div>
                        

                        <div className={styles.coordonne}>
                                <div className={styles.icones}>
                                    <i></i>
                                </div>
                                <p>+212 6 93 24 20 70</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}