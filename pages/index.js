import { useEffect, useState } from 'react'
import Holder from "../components/Holder"


const Home = () => {

  const [loading, setLoading] = useState(true);

  const [ killer, setKiller ] = useState({
    name: "Plague",
    image: "plague"
  })

  const killers = [
    {
      name: "Plague",
      image: "plague"
    },
    {
      name: "Artist",
      image: "artist"
    },
    {
      name: "Blight",
      image: "blight"
    },
    {
      name: "Cannibal",
      image: "cannibal"
    },
    {
      name: "Clown",
      image: "clown"
    },
    {
      name: "Deathslinger",
      image: "deathslinger"
    },
    {
      name: "Doctor",
      image: "doctor"
    },
    {
      name: "Freddy",
      image: "freddy"
    },
    {
      name: "Ghostface",
      image: "ghostface"
    },
    {
      name: "Hag",
      image: "hag"
    },
    {
      name: "Hillbilly",
      image: "hillbilly"
    },
    {
      name: "Huntress",
      image: "huntress"
    },
    {
      name: "Legion",
      image: "legion"
    },
    {
      name: "Michael",
      image: "michael"
    },
    {
      name: "Nemesis",
      image: "nemesis"
    },
    {
      name: "Nurse",
      image: "nurse"
    },
    {
      name: "Oni",
      image: "oni"
    },
    {
      name: "Pig",
      image: "pig"
    },
    {
      name: "Pinhead",
      image: "pinhead"
    },
    {
      name: "Pyramidhead",
      image: "pyramidhead"
    },
    {
      name: "Spirit",
      image: "spirit"
    },
    {
      name: "Trapper",
      image: "trapper"
    },
    {
      name: "Trickster",
      image: "trickster"
    },
    {
      name: "Twins",
      image: "twins"
    },
    {
      name: "Wraith",
      image: "wraith"
    },
    {
      name: "Demogorgon",
      image: "demogorgon"
    }
    
  ]

  useEffect(() =>{
    if(loading){
      let flicker = setInterval(()=> {

        let randomKiller = killers[Math.floor(Math.random()*killers.length)];
        if(randomKiller.name === killer.name){
          let randomKiller = killers[Math.floor(Math.random()*killers.length)];
        }
        setKiller(randomKiller)

      }, 300);

      setTimeout(() => {
        clearInterval(flicker);
        setLoading(false);
      }, 7000);
    }
  }, [loading])

  return <Holder loading={loading} {...killer} />

}

export default Home