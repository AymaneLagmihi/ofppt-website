import Image from 'next/image';
import logo from '../../public/logo.png';
import styles from '../../styles/layout/footer.module.css';

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.leftFooter}>
                    <Image src={logo} alt='logo-ofppt'/>
                    <button>Contactez nous</button>
                </div>

                <div className={styles.centerFooter}>
                    <h1></h1>
                    <p></p>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={styles.rightFooter}>

                </div>
            </div>
        </>
    )
}