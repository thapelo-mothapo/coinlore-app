import { useEffect } from 'react';

import styles from '../../styles/market.module.css';
import NotFound from '../404';

export async function getServerSideProps(context){

    


    try {
        const coinId = context.params.id
        const res = await fetch(`https://api.coinlore.net/api/coin/markets/?id=${coinId}`);
        const data = await res.json();
        return{
            props: {markets: data}
          }
    } catch (error) {
        return{
            props:{markets: null}
        }
    }




}


export default function CoinMarket({markets}){

    let counter = 0;
    // Create our number formatter.
    var currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    useEffect(()=>{

        document.querySelector('#hideCoins').hidden = true;
      }, []);

    if(markets === null) return <NotFound />

    return(
        <> 
            <h1>{markets[0].base} Market</h1>
            <table className={styles.table}>
                <thead className={styles.tableHeading}>
                    <tr className={styles.tableRow}>
                        <th>Name</th>
                        <th>Base</th>
                        <th>Quote</th>
                        <th>Price</th>
                        <th>Volume</th>
         
                    </tr>
                </thead>
            
                <tbody>
                    {markets.map((market) =>
                        <tr key={++counter} className={styles.tableRow}>
                            <td>{market.name}</td>
                            <td>{market.base}</td>
                            <td>{market.quote}</td>
                            <td>{currencyFormat.format( market.price)}</td>
                            <td>{Math.round(market.volume * 100) / 100 }</td>
                   
                        </tr>
                    )}
                </tbody>

            </table>
        </>
    )
}