import React from 'react'
import Loader from './Loader'
import getImage from '../Assets/Img/useImages.js'
import useWeatherApi from '../hooks/useWeatherApi'
import fechaActual from '../utils/fechaActual'

const Weather = () => {

    const {weather, isLoading, icon, temperature, setTemperature} = useWeatherApi()

    const images = getImage()

    const chngUnit = () => {
      const array = temperature.split('°')
      if (array[1] === 'C'){
        setTemperature(`${Math.round(array[0] * 1.8 + 32)}°F`)
      } else { 
        setTemperature(`${Math.round((array[0] - 32) / 1.8)}°C`)
      }
    }
      
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
            <img className='weather__image' src={weather && images[icon]} alt="Icon weather condition" />
            <p className='weather__temp'>{temperature}</p>
            <button className='button__weather' onClick={( ) => chngUnit()}>°C / °F</button>
          </section>
       </main>
}
    </div>
     
  )
}

export default Weather