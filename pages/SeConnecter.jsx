import styles from '../styles/pages/SeConnecter.module.css';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export default function SeConnecter() {
    return(
    <>
    <div className={styles.loginPage}>
        <Image className={styles.logo} src={logo} alt="logo-ofppt"/>
        <div className={styles.loginSide}>
            
            <div className={styles.backIcon}>
                <Link href="/">
                    <ArrowBackIosNewRoundedIcon/>
                </Link>
            </div>
            <div className={styles.containerForm}>
                <div className={styles.textSide}>
                    <h1>Se connecter</h1>
                    <p>Content de te revoir  Veuillez saisir vos cordonnées.</p> 
                </div>
                <div className={styles.allInputs}> 
                    <div className={styles.input}>
                        <i className={styles.circl}></i>
                        <input className={styles.input_txt} type="text" placeholder="Entrez votre adresse e-mail"/> 
                    
                    </div>
                    <div className={styles.input}>
                        <i className={styles.circl}></i>
                        <input className={styles.input_psw} type="password" placeholder="Entrez votre mot de passe"/>  
                    </div>
                    <button>Se connecter</button> 
                </div>
            </div>
        </div>
    </div>
    </>
    )
}