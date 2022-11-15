import Image from 'next/image'
import { Footer } from './components/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-3xl text-yellow-200 hover:text-4xl hover:text-yellow-400 transition-all">
          Cuidados y paseos de mascotas
        </h1>

        <p className="text-white text-2xl my-5">
          Encuentra paseadores / Consigue un empleo paseando mascotas
        </p>

        <div className={styles.grid}>
          <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Pasea mascotas</h2>
            <p>Aumenta tus ingresos cuidando o paseando mascotas</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Encuentra Paseadores cercanos</h2>
            <p>¿Necesitas que cuiden de tus mascotas? Busca aquí</p>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
