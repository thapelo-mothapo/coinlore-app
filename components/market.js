// import styles from '../styles/market.module.css'
import styles from '../styles/coin.module.css'

export default function Market({market}){


    return(


        <div className={styles.item}>
            <a>{market.name}</a>
            <a>{market.price}</a>
            <a>{market.volume}</a>
            <a>{market.time}</a>
        </div>


    )
}