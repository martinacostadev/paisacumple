import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paisa Cumple</title>
        <meta name="description" content="Paisa Cumple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hoy <strong>SI</strong> es el cumple de <a href="https://paisanos.io">Sebi!</a>
          <Image src="/sebi.jpg" alt="Sebi NO cumple" width={250} height={350} />
        </h1>
      </main>
    </div>
  )
}

export default Home
