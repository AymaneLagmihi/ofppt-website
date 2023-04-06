import styles from '../styles/pages/error.module.css';
import { useRouter } from "next/router";

export default function Error({statusCode}) {
    const router = useRouter();
    return(
        <>  
        <div className={styles.errorSide}>
            
            <h1 className={styles.h1}>{statusCode}</h1>
            <p className={styles.p1}>Page non trouvée</p>
            <p className={styles.p2}>Oups, il semble que le développeur dormait quand il a du créer cette page, ou peut-être qu elle n existe pas. Mais pas de soucis, vous pouvez toujours aller sur la page d accueil.</p>


            <div className={styles.button}>
                <button  onClick={() => router.push("/")}>ACCUEIL</button>
            </div>
        </div>
        </>
    )
}

Error.getInitialProps = ({res , err})=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode: 404
    return{statusCode}
}