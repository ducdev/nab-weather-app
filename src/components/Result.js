import React from 'react'
import styled from 'styled-components'

const ResultWrapper = styled.div`
  border: 1.5px dashed #cecece;
  padding: 15px;
  display: flex;
  margin-top: 15px;
`

const Day = styled.div`
  width: 100px;
  height: 100px;
  border: 1.5px dashed #cecece;
  padding: 15px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`

const Result = () => (
  <ResultWrapper>
    {
      [0, 1, 2, 3, 4].map(day => (
        <Day key={day}>
          Day
        </Day>
      ))
    }
  </ResultWrapper>
)

export default Result