import React, {useState} from 'react'
import styled from 'styled-components'

// COMPONENT
import SearchInput from './components/SearchInput'
import WeatherForecast from './components/WeatherForecast'
import Error from './components/Error'

const AppWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  max-width: 1024px;
  margin: 0 auto;
  input, button {
    outline: none;
  }
`

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [isWeatherDataLoading, setIsWeatherDataLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <AppWrapper>
      <h1>NAB Weather App</h1>
      <SearchInput
        setWeatherData={setWeatherData}
        setIsWeatherDataLoading={setIsWeatherDataLoading}
        setError={setError}
      />
      {
        error &&
        <Error>{error}</Error>
      }
      {
        weatherData && weatherData.title &&
        <h3>{weatherData.title}</h3>
      }
      <WeatherForecast
        weatherData={weatherData}
        isWeatherDataLoading={isWeatherDataLoading}
      />
    </AppWrapper>
  )
}

export default App
