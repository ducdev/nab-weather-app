import React, { useCallback } from 'react'
import styled from 'styled-components'

const SearchResultWrapper = styled.ul`
  position: absolute;
  border: 1px solid #cecece;
  border-radius: 4px;
  top: 35px;
  left: 0;
  list-style-type: none;
  background: #ffffff;
  width: 100%;
  padding: 0;
  > li {
    padding: 5px 15px;
    cursor: pointer;
    &:hover {
      background: #ffffcc;
    }
  }
`

const SearchResult = ({ cities, setCities, fetchWeatherDataHandler, isNoCitiesFound, setIsNoCitiesFound }) => {
  const onResultItemClickHandler = useCallback((woeid) => {
    setCities([])
    fetchWeatherDataHandler(woeid)
  }, [fetchWeatherDataHandler, setCities])

  return (
    <SearchResultWrapper>
      {
        isNoCitiesFound ?
          <li onClick={() => setIsNoCitiesFound(false)}>No cities were found</li>
        :
          cities.map(el => (
            <li key={el.woeid} onClick={() => onResultItemClickHandler(el.woeid)}>
              {el.title} ({el.location_type})
            </li>
          ))
      }
    </SearchResultWrapper>
  )
}

export default SearchResult