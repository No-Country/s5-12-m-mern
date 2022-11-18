import Image from 'next/image'
import styles from './../page.module.css'



export const Footer = () => {
    return (
      <>
    <footer className={styles.footer}>
      <div className={styles.footer1}>
        <h1 className={styles.logo}>Walk&Care</h1>
      </div>
      <div className={styles.footer2}>
        <h3 className={styles.footer2H3}>Redes Sociales</h3>
        <div className={styles.footer2list}>
          <Image src='/instagram.png' width={30} height={20} alt={"instagram"} />
          <Image src='/facebook.png' width={30} height={20} alt={"facebook"} />
          <Image src='/linkedin.png' width={30} height={20} alt={"linkedin"} />
        </div>
      </div>
      <div className={styles.footer3}>
          <p>Politicas de privacidad</p>
          <p>Necesitas ayuda. Contactanos</p>
          <p>Sobre nosotros</p>
      </div>
      <div className={styles.footer4}>
        <h3>Descarga Nuestra App</h3>
        <div className={styles.footer4btn}>
          <button className={styles.btn}>
           AppStore
          </button>
          <button className={styles.btn}>
            PlayStore
          </button>
        </div>
      </div>
    </footer>
    </>
    )
}