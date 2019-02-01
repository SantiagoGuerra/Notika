import React from 'react'
import styled, { keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const up = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.3);
  }
`
const StyledFloatButton = styled.button`
  &:focus {
    outline: none
  }

  border-radius: 50%;
  height: 60px;
  width: 60px;
  background: ${props => props.theme.mainColor};
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: ${props => props.theme.normalSpacingSize};
  &:hover {
    cursor: pointer;
  }
`

const IconContainer = styled.span`
    animation: ${up} 1200ms ease-in-out infinite alternate;
`

const FloatButton = ({onClick}) => (
  <StyledFloatButton onClick={onClick}>
    <IconContainer>
      <FontAwesomeIcon icon='plus' style={{fontSize: '20px'}}/>
    </IconContainer>
  </StyledFloatButton>
)

export default FloatButton