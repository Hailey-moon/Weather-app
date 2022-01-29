import React, {useState} from 'react'
import './App.css'

function App() {

const apiKey = '928bd7130b961e26bd0b2304997c9bdf'
const [weatherData, setWeatherData] = useState([{}])
const [city, setCity] = useState("")

const getWeather = (event) => {
  if (event.key == "Enter") {
    fetch('api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=${apiKey}').then(
      response => response.json()
    ).then(
      data=> {
        setWeatherData(data)
        setCity("")
      }
    )
  }
}

  return (
    <div className="container">
      <input
      className="input"
      placeholder="Enter City..."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      ></input>

      {typeof weatherData.main === 'undefined' ? (
        <p>Welcome to weather app! Enter in a city to get the weather of.</p>
      ) : (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}F</p>
          <p className='temp'>{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found.</p>
      ) : (
        <>
        </>
      )}
    </div>
  )
}

export default App