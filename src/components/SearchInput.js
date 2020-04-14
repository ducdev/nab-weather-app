import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import debounce from 'lodash/debounce'
import axios from 'axios'
import {DebounceInput} from 'react-debounce-input';

// COMPONENT
import SearchResult from './SearchResult'

const CORS_ANYWHERE = `https://cors-anywhere.herokuapp.com/`

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

const SearchInput = ({ setWeatherData }) => {
  const [cities, setCities] = useState([])

  const citiesSearchHandler = useCallback((e) => {
    axios.get(`${CORS_ANYWHERE}https://www.metaweather.com/api/location/search/?query=${e.target.value}`)  
      .then((res) => setCities(res.data))
      .catch((err) => console.error(err))
    }, []
  )

  const fetchWeatherDataHandler = useCallback((woeid) => {
    axios.get(`${CORS_ANYWHERE}https://www.metaweather.com/api/location/44418/`)  
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.error(err))
  }, [setWeatherData])

  return (
  <SearchInputWrapper>
    <FontAwesomeIcon icon={faSearch} />
    <DebounceInput
      placeholder="Search"
      debounceTimeout={500}
      onChange={citiesSearchHandler}
    />
    {
      cities.length > 0 &&
      (
        <SearchResult
          cities={cities}
          setCities={setCities}
          fetchWeatherDataHandler={fetchWeatherDataHandler}
        />
      )
    }
  </SearchInputWrapper>
)
}

export default SearchInput