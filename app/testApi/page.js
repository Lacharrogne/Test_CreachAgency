"use client"
import {useState, useEffect} from "react"
import axios from "axios"

const api = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get("https://www.datastro.eu/api/explore/v2.1/catalog/datasets/donnees-systeme-solaire-solar-system-data/records?limit=20")
                setData(response.data)
                setLoading(false)
            }catch(error){
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()

    }, [])

    return (
        <div>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                // <p>Les données sont prête</p>
                <ul>
                    {data &&
                        data.map(item => (
                            <li>{item.planete_planet}</li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default api