import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/coin.module.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

export default function Coin({coin}){

  const [coinHidden, setCoinHidden] = useState(false);
  const [coinId, setCoinId] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleHide = ({target}) =>{
    setLoading(true);
    setCoinId(target.getAttribute('data-coin-id'));
    setCoinHidden(true);

    location.reload();
  }






  const handleClick = () =>{
    setLoading(true);
  }

  useEffect(()=>{
    if(loading){

  
      let timeoutId = setTimeout(()=>{
        setLoading(false);
        location.reload(); 
      }, 10000);

      return()=>{
        clearTimeout(timeoutId);
      }
      
   

    }

  },[loading]);


  //refactor
  useEffect(()=>{
    localStorage.setItem(coinId, coinHidden)

  }, [coinHidden])


  useEffect(()=>{
    if(localStorage.getItem(coin.id) !== null) setCoinHidden(true);
  },[])
  
  

  return(

    <>

      {loading	&& 
        <div className={styles.spinner}>
          <TailSpin color="#FFD700" height={80} width={80} />
        </div>
      }
      {!coinHidden && <div className={styles.item}>

        <div className={styles.itemBody}>

          <Link href={`/coins/${coin.id}`} >
            <a className={styles.itemContent}
            onClick={handleClick}
            >
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