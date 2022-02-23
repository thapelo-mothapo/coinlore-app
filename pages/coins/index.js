import { useEffect } from 'react';
import Coin from '../../components/coin'

export async function getServerSideProps(){

    const res = await fetch('https://api.coinlore.net/api/tickers/');
    const {data} = await res.json();
    
    return{
      props: {coins: data}
    }
}

export default function Coins({coins}){

  useEffect(()=>{

    document.querySelector('#hideCoins').hidden = false;
  }, []);

  if(!coins)return<p>Loading...</p>
  return(
    <>
      <h1>All Coins</h1>
      {coins.map((coin)=>(
        <Coin key={coin.id} coin={coin}/>
      ))}
    </>
  )
}



 


