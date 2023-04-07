import styles from '../styles/pages/SeConnecter.module.css';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export default function SeConnecter() {
    return(
    <>
    <div className={styles.loginPage}>

        <div className={styles.loginSide}>
            <Link href="/"  className={styles.backIcon}>
                <ArrowBackIosNewRoundedIcon  className={styles.arrow}/>
            </Link>
            <div className={styles.containerForm}>
                <div className={styles.textSide}>
                    <h1>Se connecter</h1>
                    <p>Content de te revoir  Veuillez saisir vos cordonnées.</p> 
                </div>
                <div className={styles.allInputs}> 
                    <div className={styles.div}>
                        <i className={styles.circl}></i>
                        <input required className={styles.input} type="email" placeholder="Entrez votre adresse e-mail" /> 
                    </div>
                    <div className={styles.div}> 
                        <i className={styles.circl}></i>
                        <input required className={styles.input} type="password" placeholder="Entrez votre mot de passe" minlength="8"/>  
                    </div>
                    <div className={styles.button1}>
                    <button className={styles.button}>Se connecter</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}