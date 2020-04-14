import React, {useState} from 'react'
import styled from 'styled-components'

// COMPONENT
import SearchInput from './components/SearchInput'
import WeatherForecast from './components/WeatherForecast'

const AppWrapper = styled.div`
  padding: 15px;
  max-width: 1024px;
  margin: 0 auto;
  input, button {
    outline: none;
  }
`

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  return (
    <AppWrapper>
      <SearchInput setWeatherData={setWeatherData} />
      <WeatherForecast weatherData={weatherData} />
    </AppWrapper>
  )
}

export default App
