"use client"
import {useState, useEffect} from "react"

const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number+1)
    }
    const decrement = () => {
        setNumber(number-1)
    }

    useEffect(() => {
        console.log("coucou");
    }, [number])

  return (
    <>
        <div>{number}</div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
    </>
  )
}

export default jeu