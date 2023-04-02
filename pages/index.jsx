import styles from '@/styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.textSide}>
          <h1 className={styles.header}>
            Office de la Formation Professionnelle et du travail <span>CFIJ Al Karia</span> 
          </h1>
          <p className={styles.paragraphe}>
            Depuis son ouverture en 2015, l OFPPT Al Karia a formé plus de 1000 techniciens dans les secteurs informatiques.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h1>+1000</h1>
            <p>Technicient spécialisée</p>
          </div>
          <div className={styles.card}>
            <h1>5</h1>
            <p>Formation</p>
          </div>
          <div className={styles.card}>
            <h1>2015</h1>
            <p>Ouvert a enseigner de puis</p>
          </div>

        </div>
      </div>
    </div>
  )
}
