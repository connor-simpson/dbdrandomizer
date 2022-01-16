import { useEffect, useState } from "react"
import Holder from "../components/PerksHolder"
import categories from "../killerPerkCategories.json"

const Perks = () => {

    const [category, setCategory] = useState(true);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(loading){
            let categoryTick = setInterval(() => {
                setCategory(categories[Math.floor(Math.random()*categories.length)])
            }, 350);

            setTimeout(() => {
                clearInterval(categoryTick);
                setLoading(false);
            }, 10000);
        }
    },[loading])

    return <Holder loading={loading} {...category} />

}

export default Perks