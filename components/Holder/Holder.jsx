import { useEffect, useState } from 'react'
import styles from './Holder.module.css'

const Holder = ({ type, loading, name, image, vertical}) => {

    const [showName, setShowName] = useState(false);

    useEffect(() => {
        if(!loading){
            setTimeout(() =>{
                setShowName(true);
            }, 4000)
        }
    }, [loading]);
   
    
    return <div className={`${vertical ? styles.holderVertical : styles.holder}`}>
            {(showName || loading)  &&

                <div className={styles.characterSlot}>
                    <img src={`../images/${type == 'survivor' ? 'survivors' : 'killers'}/${image}.png`} />
                </div>
            }
            {!loading &&
                <div className={styles.characterDescription}>
                    <h2>The entity has chosen</h2>
                    {showName &&
                        <h1>{name}</h1>
                    }
                </div>
            }
            {loading &&
                <div className={styles.loadingContainer}>
                    <h2>The entity is choosing</h2>
                    <img src={`../images/loading.gif`} />
                    
                </div>
            }
    </div>
    
}

export default Holder