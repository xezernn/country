import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const Data = createContext()
function DataContext({ children }) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setData(res.data.filter(item => item.cca3 !== "ARM")))
    }, [])
    return (
        <Data.Provider value={data}>
            {children}
        </Data.Provider>
    )
}

export default DataContext