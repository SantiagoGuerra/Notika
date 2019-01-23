import React from 'react'
import styled from 'styled-components'

const StyledBadge = styled.div`
  background: ${props => props.theme.badgeColor};
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: ${props => props.theme.fontFamily};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: ${props => props.theme.frontLevel};
  font-size: ${props => props.theme.extraSmallFontSize};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);

  @media screen and (min-width: 760px) {
  font-size: ${props => props.theme.smallFontSize};
  height: 16px;
  width: 16px;
  }
`

const Badge = ({props, lenght}) => <StyledBadge {...props}>{lenght}</StyledBadge>

export default Badge