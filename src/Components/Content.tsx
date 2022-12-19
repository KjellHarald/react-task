import React, { useContext, useState, useEffect } from "react"
import Header from "./Header.tsx"
import appContext from './context.ts'

const Content = () => {
    const [apiInfo, setInfoApi] = useState([])
    

    const someAPI = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/', {
            "method":"GET"
        })

        const data = await response.json()
        setInfoApi(data)
    }

    useEffect(()=>{
        someAPI()
    }, [])

    const myContext = useContext(appContext)

    return (
        <div className="content">
            <Header/>
            {myContext}
            {Object.entries(apiInfo).map(([key, val])=>{
                return (<p>{key} : {val}</p>)
            })}
        </div>
    )
}


export default Content