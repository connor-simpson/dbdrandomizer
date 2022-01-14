import { useEffect, useState } from 'react'
import Holder from "../components/Holder"
import survivors from '../survivors.json'

const SurvivorsVertical = () => {

    const [loading, setLoading] = useState(true)

    const [ survivor, setSurvivor ] = useState({
      name: "Caludette",
      image: "claudette"
    })
  
    useEffect(() =>{
      if(loading){
  
        let survivorTick = 0
  
        let flicker = setInterval(()=> {
          
          if(survivorTick > (survivors.length-1)){
            survivorTick = 0
          }
          let survivorTicked = survivors[survivorTick]
          setSurvivor(survivorTicked)
          survivorTick++
        }, 200);
  
        setTimeout(() => {
          clearInterval(flicker)
          setLoading(false)
          setSurvivor(survivors[Math.floor(Math.random()*survivors.length)])
        }, 10000);
      }
    }, [loading])
  
    return <Holder type={`survivor`} loading={loading} {...survivor} vertical />

}

export default SurvivorsVertical