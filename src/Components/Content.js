import { useState, useEffect } from "react"
const Content = () => {
    const [apiInfo, setInfoApi] = useState([])

    const someAPI = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/', {
            "method":"GET"
        })

        const data = await response.json()
        setInfoApi(data)
        console.log('Call API')
    }

    useEffect(()=>{
        someAPI()
    }, [])
    
    return (
        <div className="content">
            <p>Import/Export</p>
            {Object.entries(apiInfo).map(([key, val])=>{
                return (<p>{key} : {val}</p>)
            })}
        </div>
    )
}

export default Content