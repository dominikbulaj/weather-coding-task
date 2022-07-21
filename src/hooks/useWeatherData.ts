import { useEffect, useState } from "react"
import { ForecastApiResponse, ForecastItem, isApiError, StatsData } from "../types"
import useSelectCity from "./useSelectCity"
const R = require('ramda')

const useWeatherData = () => {
    const { selectedCity } = useSelectCity()
    const [data, setData] = useState<{ forecast: ForecastItem[], stats: StatsData }>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | unknown>(null)
    // fetch data when city coordinates change
    useEffect(() => {
        if (selectedCity) {
            (async () => {
                try {
                    setLoading(true)
                    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
                    const { lat, lon } = selectedCity
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                    const json = await response.json() as ForecastApiResponse

                    if (isApiError<ForecastApiResponse>(json)) {
                        throw json.message
                    }

                    const getHour = R.compose(R.head, R.split(':'), R.last, R.split(' '), R.prop('dt_txt'))

                    const addHour = (item: {}) => {
                        const hour = getHour(item)
                        return {
                            ...item,
                            hour
                        }
                    }

                    const byDate = R.compose(R.head, R.split(' '), R.prop('dt_txt'))

                    const byHours = R.compose(R.includes(R.__, ['06', '12', '21']), R.prop('hour'))

                    const mapForecasts = (val: unknown, key: string) => {
                        const humidity = R.pluck('humidity', R.pluck('main', val));

                        const temp = R.reduce((acc: { morning?: number, day?: number, night?: number }, curr: unknown) => {
                            const getValue = R.path(['main', 'temp'])
                            const getKey = R.compose(R.cond([
                                [R.equals('06'), R.always('morning')],
                                [R.equals('12'), R.always('day')],
                                [R.equals('21'), R.always('night')],
                            ]), R.prop('hour'))

                            return R.assoc(getKey(curr), getValue(curr).toFixed(1), acc)
                        }, {}, val)

                        return {
                            temp,
                            humidity: R.mean(humidity).toFixed(1),
                            date: key
                        }
                    }
                    const filterList = R.compose(R.filter(byHours), R.map(addHour))(json.list)
                    const forecast: ForecastItem[] = R.compose(R.values, R.mapObjIndexed(mapForecasts), R.groupBy(byDate))(filterList)

                    const temperatureList: number[] = R.pluck('temp', R.pluck('main', filterList));

                    const stats: StatsData = {
                        min: Math.min(...temperatureList).toFixed(1),
                        max: Math.max(...temperatureList).toFixed(1),
                        mean: R.mean(temperatureList).toFixed(1),
                        mode: 'TODO'
                    }
                    setData({ forecast, stats })

                } catch (error: unknown) {
                    setError(error)
                } finally {
                    setLoading(false)
                }
            })()
        }
        // reset state when city is reset (going to edit mode)
        else {
            setData(undefined)
            setLoading(false)
            setError(null)
        }

    }, [selectedCity])


    return { data, loading, error }
}

export default useWeatherData