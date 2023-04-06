import styles from '../styles/pages/emplois.module.css';

export default function Emploits() {
    return(
    <>
        <div>
            <div className={styles.div_1}>
                <select className={styles.select} id="select">
                    <option value="DD101">DD101</option>
                    <option value="DD102">DD102</option>
                    <option value="DD201">DD201</option>
                    <option value="DD202">DD202</option>
                    <option value="INFO101">INFO101</option>
                    <option value="INFO102">INFO102</option>
                    <option value="INFO201">INFO201</option>
                    <option value="INFO202">INFO202</option>
                </select>
            </div>
            <table className={styles.table}>
                <tr>
                   <td>           </td>
                   <td className={styles.heure}>8:30  10:30</td> 
                   <td className={styles.heure}>11:00  13:30</td>
                   <td className={styles.heure}>13:30  16:00</td> 
                   <td className={styles.heure}>16:00  18:30</td> 
                </tr>
                <tr>
                   <td className={styles.jour}>Lundi</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td>
                </tr>
                <tr>
                   <td className={styles.jour}>Mardi</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td>
                </tr>
                <tr>
                   <td className={styles.jour}>Mercredi</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td>
                </tr>
                <tr>
                   <td className={styles.jour}>Jeudi</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td>
                </tr>
                <tr>
                   <td className={styles.jour}>Vendredi</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td>
                </tr>
                <tr>
                   <td className={styles.jour}>Samedi</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td> 
                   <td className={styles.seance}>Seance</td>
                   <td className={styles.seance}>Seance</td>
                </tr>
            </table>
        </div>
    </>
    )
}