import { useCallback, useContext, useEffect, useState } from "react";
import { CityContext } from "../context/city";
import { ApiErrorResponse, City, isApiError } from "../types";
const R = require('ramda')

type CitesList = City[]

const useSelectCity = () => {
    const [city, setCity] = useState('')
    const { city: selectedCity, setCity: setSelectedCity } = useContext(CityContext)
    const [cities, setCities] = useState<CitesList>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | unknown>(null)

    // fetch data when city name changes
    useEffect(() => {
        if (city) {
            (async () => {
                try {
                    setLoading(true)
                    // reset states
                    setCities([])
                    setError(null)


                    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
                    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
                    const json = await response.json() as CitesList | ApiErrorResponse

                    if (isApiError<CitesList>(json)) {
                        throw (json.message)
                    }

                    if (json.length > 0) {
                        const byCoordinates = R.collectBy(R.props(['lat', 'lon']), json)

                        if (byCoordinates.length === 1) {
                            setSelectedCity(R.head(json))
                        } else {
                            setCities(R.map(R.mergeAll, byCoordinates))
                        }
                    }
                } catch (error: unknown) {
                    setError(error)
                } finally {
                    setLoading(false)
                }
            })()
        }
    }, [city, setSelectedCity])

    const selectCityByIndex = useCallback((index: number) => {
        if (index === -1) { setSelectedCity(undefined) }
        if (cities[index]) { setSelectedCity(cities[index]) }
    }, [cities, setSelectedCity])


    return { city, setCity, selectedCity, selectCityByIndex, cities, loading, error }
}

export default useSelectCity