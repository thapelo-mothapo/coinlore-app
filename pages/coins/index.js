import Coin from '../../components/coin'

export async function getServerSideProps(){

    const res = await fetch('https://api.coinlore.net/api/tickers/');
    const {data} = await res.json();
    
    return{
      props: {coins: data}
    }
}

export default function Coins({coins}){

  return(
    <>
      <h1>All Coins</h1>
      {coins.map((coin)=>(
        <Coin key={coin.id} coin={coin}/>
      ))}
    </>
  )
}



 


