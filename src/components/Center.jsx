import React from 'react'
import styled from 'styled-components'

const StyledCenter = styled.div`
  padding: ${props => props.theme.largeSpacingSize};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Center = ({children}) => (
  <StyledCenter>
    {children}
  </StyledCenter>
)

export default Center