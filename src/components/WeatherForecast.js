import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

const WeatherForecastWrapper = styled.div`
  border: 1.5px dashed #cecece;
  padding: 15px;
  display: flex;
  margin-top: 15px;
`

const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100px;
  height: 100px;
  border: 1.5px dashed #cecece;
  padding: 15px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`

const WeatherForecast = ({ weatherData }) => {
  const daysData = get(weatherData, 'consolidated_weather', [])

  if (daysData.length === 0) {
    return null
  }

  return (
  <WeatherForecastWrapper>
    {
      daysData.map(day => (
        <Day key={day.applicable_date}>
          <span>{day.applicable_date}</span>
          <span>Min: {day.min_temp}</span>
          <span>Max: {day.max_temp}</span>
        </Day>
      ))
    }
  </WeatherForecastWrapper>
)
}

export default WeatherForecast