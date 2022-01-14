import styles from './Holder.module.css'

const Holder = ({ loading, name, image}) => {

   
    return <div className={`${styles.holder} ${(loading ? styles.holderLoading: '')}`}>
         <div className={styles.characterSlot}>
                <img src={`../images/killers/${image}.png`} />
            </div>
            {!loading &&
                <div className={styles.characterDescription}>
                    <h1>{name}</h1>
                </div>
            }
        </div>
    
}

export default Holder