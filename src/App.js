import React, {useState} from 'react'
import styled from 'styled-components'

// COMPONENT
import SearchInput from './components/SearchInput'
import WeatherForecast from './components/WeatherForecast'

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

  return (
    <AppWrapper>
      <SearchInput
        setWeatherData={setWeatherData}
        setIsWeatherDataLoading={setIsWeatherDataLoading}
      />
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
