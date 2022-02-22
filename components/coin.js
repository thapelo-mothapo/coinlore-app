import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/coin.module.css'

export default function Coin({coin}){

  const [coinHidden, setCoinHidden] = useState(false);
  const [coinId, setCoinId] = useState(0);

  const handleHide = ({target}) =>{
    console.log(target.getAttribute('data-coin-id'));

    setCoinId(target.getAttribute('data-coin-id'));
    setCoinHidden(true);
  }



  //refactor
  useEffect(()=>{
    localStorage.setItem(coinId, coinHidden)

  }, [coinHidden])


  useEffect(()=>{
    if(localStorage.getItem(coin.id) !== null) setCoinHidden(true);
    else console.log("nope")
  },[])
  
  

  return(

    <>
      {!coinHidden && <div className={styles.item}>

        <div className={styles.itemBody}>

          <Link href={`/coins/${coin.id}`} >
            <a className={styles.itemContent}>
              <p>{coin.name}</p>
              <h3 className={styles.itemHeading}>{coin.symbol}</h3>
            </a>
          </Link>

          <button className={styles.hideCoin} 
          data-coin-id={coin.id} 
          onClick={handleHide}
          >hide</button>
        </div>
      
      </div>
      }
    </>
  )
}