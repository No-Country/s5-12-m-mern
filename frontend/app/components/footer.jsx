import Image from 'next/image'
import styles from './../page.module.css'

export const Footer = () => {
    return (
    <footer className={styles.footer}>
      <a href="#">
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>)
}