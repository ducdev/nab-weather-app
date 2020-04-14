import React from 'react'
import styled from 'styled-components'

// COMPONENT
import SearchInput from './components/SearchInput'
import Result from './components/Result'

const AppWrapper = styled.div`
  padding: 15px;
  max-width: 1024px;
  margin: 0 auto;
  input, button {
    outline: none;
  }
`

const App = () => (
  <AppWrapper>
    <SearchInput />
    <Result />
  </AppWrapper>
)

export default App
