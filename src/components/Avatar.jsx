import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img.attrs({
  src: props => props.url
})`
  border: 2px solid #FFF;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: relative;
`

const Avatar = ({url}) => <StyledAvatar url={url}/>

export default Avatar