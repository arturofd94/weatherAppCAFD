import axios from "axios"
import { useEffect, useState } from "react"


const useWeatherApi = () => {

    const [coords, setCoords] = useState([])
    const [weather, setWeather] = useState()
    const [temperature, setTemperature] = useState('')
    const [icon, setIcon] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
  
        const success = pos => {
          const lat = pos?.coords?.latitude
          const lon = pos?.coords?.longitude
          setCoords({lat, lon})
        }
    
        navigator.geolocation.getCurrentPosition(success)
      }, [])
    
      useEffect( () => {
  
         if(coords.lat !== undefined) {
    
          const API_KEY = 'aae2d9334239f2d1144a99ffd0d09d26'
          const URL =  `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${API_KEY}&units=metric`
    
          axios.get(URL)
          .then( res => {
            setWeather(res.data)
            setTemperature(`${Math.round(res.data.main.temp)}°C`)
            setIcon(res.data.weather[0].icon)
            setIsLoading(false)
          })
          .catch( err => console.log(err))
        }
      }, [coords])

  return {temperature, icon, weather, isLoading, setTemperature}
}

export default useWeatherApi