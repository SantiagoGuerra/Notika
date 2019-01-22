import React from 'react'
import styled from 'styled-components';
import Title from './Title';
import Text from './Text'

const StyledNote = styled.article`
  border: 3px solid ${props => props.borderColor};
  border-radius: ${props => props.theme.normalBorder};
  max-width: 300px;
  background: white;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0,0,0, .2);
    cursor: pointer;
  }
`

const Note = ({borderColor, title, text, isOpen}) => (
  <StyledNote borderColor={borderColor}>
    <Title isopen={isOpen}>
      {title}
    </Title>
    <Text isOpen={isOpen}>
      {text}
    </Text>
  </StyledNote>
)

export default Note