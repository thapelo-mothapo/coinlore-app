import Head from 'next/head'
import styles from '../styles/home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <Head>
        <title>Coinlore Coins</title>
      </Head>
      <div>
        <h1 className={styles.title}>WeCoin Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        
        <Link href="/coins/">
          <a className={styles.btn}>See Coins</a>
        </Link>
      </div>
    </>
  )
}
