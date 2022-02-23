import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '../styles/navbar.module.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

export default function Nav(){

  const [loading, setLoading] = useState(false);

  const handleClick = () =>{

    setLoading(true);
    localStorage.clear(); 
    location.reload(); 
  }

  useEffect(()=>{
    if(loading){

      if(localStorage.length > 1){
        let timeoutId = setTimeout(()=>{
          setLoading(false);
        }, 10000);

        return()=>{
          clearTimeout(timeoutId);
        }
      }
   

    }

  },[loading]);

  return(
    <>

      {loading	&& 
        <div className={styles.spinner}>
          <TailSpin color="#00BFFF" height={100} width={100} />
        </div>
      }
      <nav>
        <div className="logo">

          <Link href='/'>
            <a><h1>WeCoin</h1></a>
            
          </Link>
          <Link href="/"><a>Home</a></Link>
          <Link href="/coins"><a>Coins</a></Link>
          
        </div>
        
        <button id="hideCoins" className={styles.btn} 
        onClick={handleClick}
        title="Unhide all"
        >
          <img src="https://img.icons8.com/ios-glyphs/24/000000/visible--v2.png"/>
        </button>
      </nav>
    </>
    )
 
}



