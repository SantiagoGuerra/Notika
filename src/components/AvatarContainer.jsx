import React from 'react'
import Avatar from './Avatar'
import Badge from './Badge'
import styled from 'styled-components'

const StyledAvatarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  position: relative;
`

const StyledAvatarName = styled.p`
  color: #FFF;
  font-size: ${props => props.theme.smallFontSize};
  margin-left: ${props => props.theme.smallSpacingSize};
  font-family: ${props => props.theme.fontFamily};
  margin-right: ${props => props.theme.largeSpacingSize};
`

const AvatarContainer = ({props, url, lenght, user}) => (
<StyledAvatarContainer>
  <Avatar url={url}/>
  <Badge lenght={lenght}/>
  <StyledAvatarName>
    {user}
  </StyledAvatarName>
</StyledAvatarContainer>)


export default AvatarContainer