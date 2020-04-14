import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {DebounceInput} from 'react-debounce-input';

// COMPONENT
import SearchResult from './SearchResult'

// CONSTANT
import { CORS_ANYWHERE, METAWEATHER } from '../constants'

const SearchInputWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 10px;
  max-width: 300px;
  display: flex;
  align-items: center;
  position: relative;
  > input {
    border: none;
    margin-left: 15px;
    line-height: 16px;
    font-size: 16px;
  }
`

const SearchInput = ({ setWeatherData, setIsWeatherDataLoading, setError }) => {
  const [cities, setCities] = useState([])
  const [loadingCities, setLoadingCities] = useState(false)
  const [isNoCitiesFound, setIsNoCitiesFound] = useState(false)

  const citiesSearchHandler = useCallback((e) => {
    setLoadingCities(true)

    if (isNoCitiesFound) {
      setIsNoCitiesFound(false)
    }

    axios.get(`${CORS_ANYWHERE}${METAWEATHER}api/location/search/?query=${e.target.value}`)  
      .then((res) => {
        setError(null)
        setLoadingCities(false)
        setCities(res.data)
        if (res.data.length === 0) {
          setIsNoCitiesFound(true)
        }
      })
      .catch((err) => {
        setLoadingCities(false)
        setError('Get cities error!')
        console.error(err)
      })
    }, [isNoCitiesFound, setError]
  )

  const fetchWeatherDataHandler = useCallback((woeid) => {
    setIsWeatherDataLoading(true)
    axios.get(`${CORS_ANYWHERE}${METAWEATHER}api/location/${woeid}/`)  
      .then((res) => {
        setError(null)
        setWeatherData(res.data)
        setIsWeatherDataLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Get weather forecast data error!')
        setIsWeatherDataLoading(false)
      })
  }, [setError, setIsWeatherDataLoading, setWeatherData])

  return (
    <SearchInputWrapper>
      {
        loadingCities ?
          <FontAwesomeIcon icon={faSpinner} spin />
        :
          <FontAwesomeIcon icon={faSearch} />
      }
      <DebounceInput
        placeholder="Search"
        debounceTimeout={500}
        onChange={citiesSearchHandler}
      />
      {
        (cities.length > 0 || isNoCitiesFound) &&
        (
          <SearchResult
            cities={cities}
            setCities={setCities}
            isNoCitiesFound={isNoCitiesFound}
            fetchWeatherDataHandler={fetchWeatherDataHandler}
            setIsNoCitiesFound={setIsNoCitiesFound}
          />
        )
      }
    </SearchInputWrapper>
  )
}

export default SearchInput