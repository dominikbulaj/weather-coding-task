export type City = { name: string, local_names: Record<string, string>, state: string, lat: number, lon: number, country: string }

export interface CityContextInterface {
    city?: City;
    setCity: (city?: City) => void
}

interface ForecastListWeather {
    id: number,
    main: string,
    description: string,
    icon: string,
}
export interface ForecastApiItem {
    dt: number,
    main: Record<'temp' | 'feels_like' | 'temp_min' | 'temp_max' | 'pressure' | 'sea_level' | 'grnd_level' | 'humidity' | 'temp_kf', number>
    weather: ForecastListWeather[],
    clouds: { all: number },
    wind: Record<'speed' | 'deg' | 'gust', number>,
    visibility: number,
    pop: number,
    sys: { pod: 'd' | 'n' },
    rain?: { '3h': number },
    snow?: { '3h': number },
    dt_txt: string
}

export interface ForecastApiResponse {
    cod: string,
    message: number,
    cnt: number,
    list: ForecastApiItem[],
    city: {
        id: number,
        name: string,
        coord: Record<'lat' | 'lon', number>
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number,
    }
}

export interface ForecastItem {
    date: string,
    temp: {
        morning?: number,
        day?: number,
        night?: number,
    },
    humidity: string

}

export interface StatsData {
    min: string,
    max: string,
    mean: string,
    mode: string
}

export interface ApiErrorResponse {
    cod: number, message: string
}

export const isApiError = <T>(response: T | ApiErrorResponse): response is ApiErrorResponse => {
    const cod = (response as ApiErrorResponse).cod
    return cod !== undefined && Number(cod) !== 200;
}