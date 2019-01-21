import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme'

import Badge from '../components/Badge'
import Avatar from '../components/Avatar';
import AvatarContainer from '../components/AvatarContainer';

storiesOf('UI', module)
  .add('Badge', () => (
    <ThemeProvider theme={theme}>
      <Badge lenght={12}/>
    </ThemeProvider>
  ))
  .add('Avatar', () => (
    <ThemeProvider theme={theme}>
      <Avatar url='https://www.rmanj.com/wp-content/uploads/2016/08/avatar-img-03.jpg'/>
    </ThemeProvider>
  ))
  .add('Avatar Container', () => (
    <ThemeProvider theme={theme}>
      <AvatarContainer
        url='https://www.rmanj.com/wp-content/uploads/2016/08/avatar-img-03.jpg'
        lenght={6}
        user='Alan Doe'
      />
    </ThemeProvider>
  ))