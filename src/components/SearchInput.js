import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInputWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 10px;
  max-width: 300px;
  display: flex;
  align-items: center;
  > input {
    border: none;
    margin-left: 15px;
    line-height: 16px;
    font-size: 16px;
  }
`

const SearchInput = () => (
  <SearchInputWrapper>
    <FontAwesomeIcon icon={faSearch} />
    <input placeholder="Search" />
  </SearchInputWrapper>
)

export default SearchInput