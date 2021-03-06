import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'



export default function Home() {

  useEffect(()=>{

    document.querySelector('#hideCoins').hidden = true;
  }, []);
  return (
    <>
      <Head>
        <title>Coinlore Coins</title>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to WeCoin</h1>
        <p className={styles.text}>Designed and developed around<Link href="https://www.coinlore.com/cryptocurrency-data-api"><a> Coinlore </a></Link>which provides a free cryptocurrency api <br />that does not need api keys and is available publicly.
        </p>
        
        <Link href="/coins/">
          <a className={styles.btn}>See Coins</a>
        </Link>
      </div>
    </>
  )
}
