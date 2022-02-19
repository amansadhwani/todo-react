import React, { useEffect, useState } from 'react'


const ApiData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return (
        <>
            {data.map((item, index) => {
                return <p key={index} data-testid={`api-data-${index}`}>{item.name}</p>
            })}
        </>
    )

}

export default ApiData;