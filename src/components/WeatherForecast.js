import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// HELPER
import { dateFormat, tempFormat } from '../helpers'

const WeatherForecastWrapper = styled.div`
  border: 1.5px dashed #cecece;
  padding: 15px;
  display: grid;
  grid-gap: 15px;
  grid-row: auto;
  grid-template-columns: repeat(auto-fill, 130px);
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
`

const WeatherForecast = ({ weatherData, isWeatherDataLoading }) => {
  const daysData = get(weatherData, 'consolidated_weather', [])

  if (isWeatherDataLoading) {
    return (
      <WeatherForecastWrapper>
        <FontAwesomeIcon icon={faSpinner} spin />
      </WeatherForecastWrapper>
    )
  }

  if (daysData.length === 0) {
    return (
      <p>Please search for a city.</p>
    )
  }

  return (
  <WeatherForecastWrapper>
    {
      daysData.map(day => (
        <Day key={day.applicable_date}>
          <span>{dateFormat(day.applicable_date)}</span>
          <span>Min: {tempFormat(day.min_temp, 2)}</span>
          <span>Max: {tempFormat(day.max_temp)}</span>
        </Day>
      ))
    }
  </WeatherForecastWrapper>
)
}

export default WeatherForecast