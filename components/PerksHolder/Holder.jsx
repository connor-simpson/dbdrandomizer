import { useEffect, useState } from 'react'
import styles from './Holder.module.css'

const Holder = ({ categoryName, loading, name, vertical, image }) => {

    const [showName, setShowName] = useState(false);

    useEffect(() => {
        if(!loading){
            setTimeout(() =>{
                setShowName(true);
            }, 4000)
        }
    }, [loading]);
    
    return <div className={`${vertical ? styles.holderVertical : styles.holder}`}>
            {!loading &&
                <div className={styles.characterDescription}>
                    <h2>The entity has chosen</h2>
                    {showName &&
                    <>
                        <h1>{name[Math.floor(Math.random()*name.length)]}</h1>
                        <ul className={styles.perksList}>
                            <li>
                                <img src={`../images/perks/killers/hexRuin.gif`} />
                                <h3>Hex: Ruin</h3>
                            </li>
                            <li>
                                <img src={`../images/perks/killers/hexRuin.gif`} />
                                <h3>Oppression</h3>
                            </li>
                            <li>
                                <img src={`../images/perks/killers/corruptIntervention.gif`} />
                                <h3>Corrupt Intervention</h3>
                            </li>
                            <li>
                                <img src={`../images/perks/killers/thrillingTremors.gif`} />
                                <h3>Thrilling Tremors</h3>
                            </li>
                        </ul>
                    </>
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