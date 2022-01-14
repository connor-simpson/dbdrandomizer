import { useEffect, useState } from "react"
import Holder from "../components/Holder"
import killers from "../killers.json"

const Vertical = () => {
    const [loading, setLoading] = useState(true)

    const [ killer, setKiller ] = useState({
      name: "Plague",
      image: "plague"
    })
  
    useEffect(() =>{
      if(loading){
  
        let killerTick = 0
  
        let flicker = setInterval(()=> {
          
          if(killerTick > (killers.length-1)){
            killerTick = 0
          }
          let killerTicked = killers[killerTick]
          setKiller(killerTicked)
          killerTick++
        }, 200);
  
        setTimeout(() => {
          clearInterval(flicker)
          setLoading(false)
          setKiller(killers[Math.floor(Math.random()*killers.length)])
        }, 10000);
      }
    }, [loading])

    return <Holder vertical loading={loading} {...killer} />

}

export default Vertical;