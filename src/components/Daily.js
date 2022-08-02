import React, { useEffect } from "react"
import { API_URL } from "../urls"

const Daily = () => {

    // const longitude = 18.069
    // const latitude = 59.322

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "data")
            })
    }, [])


    return(
        <article>
            Here is the daily weather.
        </article>
    )
}

export default Daily