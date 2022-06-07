import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from './Loader'

const Weather = () => {

    const [coords, setCoords] = useState([])
    const [weather, setWeather] = useState()
    const [temperature, setTemperature] = useState('')
    const [icon, setIcon] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    
    const fechaActual = () => {
      const fecha = Date.now();
      const fechaNueva = new Date(fecha);
      const opciones = {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
  
      }
      return fechaNueva.toLocaleDateString('en-Es', opciones);
  }

    const chngUnit = () => {
      const array = temperature.split('°')
      if (array[1] === 'C'){
        setTemperature(`${Math.round(array[0] * 1.8 + 32)}°F`)
      } else { 
        setTemperature(`${Math.round((array[0] - 32) / 1.8)}°C`)
      }
    }
      
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

  return (
    <div className='weather'>
      {

        isLoading ?

        <Loader />

        :

       <main className='center'>
          <header className='center__header'>
            <p className='center__headerp'>{fechaActual()}</p>
            <p className='center__headerp1'>{`${weather?.name}, ${weather?.sys?.country}`}</p>
          </header>
          <section className='weather__info'>
            <p>{`${weather?.weather[0]?.main}, ${weather?.weather[0]?.description}`}</p>
            <img className='weather__image' src={icon && `http://openweathermap.org/img/wn/${icon}@4x.png`} alt="Icon weather condition" />
            <p className='weather__temp'>{temperature}</p>
            <button className='button__weather' onClick={( ) => chngUnit()}>°C / °F</button>
          </section>
       </main>
}
    </div>
     
  )
}

export default Weather