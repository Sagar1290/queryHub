"use client"

import { useEffect, useState } from 'react'

const CountryLookup = () => {

    const [country, setCountry] = useState("Loading...")
    useEffect(() => {
        const getCountry = async () => {
            const response = await fetch('https://ipapi.co/json').then((res) => res.json()).then((data) => `${data.region}, ${data.country_name}`)

            if (!response) {
                setCountry("India")
                return;
            }
            setCountry(response)
        }
        getCountry();
    }, [])

    return (
        <div>{country}</div>
    )
}

export default CountryLookup