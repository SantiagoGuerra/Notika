import React from 'react';
import styled from 'styled-components';
import AvatarContainer from './AvatarContainer';

const StyledHeader = styled.header`
  background: ${props => props.theme.mainColor};
  height: 50px;
  box-shadow: 0px 2px 4px rgb(0, 0, 0, .2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Header = ({url, lenght, user}) => (
  <StyledHeader>
    <AvatarContainer 
      url={url}
      lenght={lenght}
      user={user}
    />
  </StyledHeader>
)

export default Header