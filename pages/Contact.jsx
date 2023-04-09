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
                    <iframe  className={styles.side_image} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.1868277208084!2d-6.7677737429045814!3d34.01669073567903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76a60d6632f93%3A0x6ff00f067effb565!2sCfpij!5e0!3m2!1sen!2sma!4v1680901325817!5m2!1sen!2sma" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}