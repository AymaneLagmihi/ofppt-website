import styles from '../styles/pages/contact.module.css';
import Image from 'next/image';
import map from '../public/Cfpij-Google-Maps.png';

export default function contact() {
    return(
        <div className={styles.container}>
            <div className={styles.contact_header}>
                <p className={styles.p0}>Contactez nous pour plus d’information</p>
                <p className={styles.p1}>Besoin de plus d’information? Vous pouvez nous envoyer un courrier en utilisant la formulaire ci-dessous, ou vous pouvez nous rendre visite localement en utilisant notre carte de localisation affichée.</p>
            </div>
            <div className={styles.contact_side}>
                <div  className={styles.side_left}>
                    <form action="" className={styles.form}>
                        <input required type="text" placeholder="Nom complet"/>
                        <input required type="text" placeholder="Adresse email"/>
                        <textarea required rows="7" placeholder="Saisir votre message"></textarea>
                        <button>Envoyer</button>
                    </form>
                </div>
                <div className={styles.side_right}>
                    <a href="https://goo.gl/maps/NrqiXBMrxzENqv6s9" target="_blank">
                        <Image className={styles.side_image} src={map} alt="CFPIJ alkaria sur google maps"/>
                    </a>
                </div>
            </div>
        </div>
    )
}