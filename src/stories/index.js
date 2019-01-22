import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme'
import Badge from '../components/Badge'
import Avatar from '../components/Avatar';
import Categories from '../components/Categories'
import AvatarContainer from '../components/AvatarContainer';
import Header from '../components/Header';
import '../index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faCoffee, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faCoffee, faChevronDown, faChevronUp)

storiesOf('Components', module)
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
  
  
storiesOf('UI', module)
  .add('Avatar Container', () => (
    <ThemeProvider theme={theme}>
      <AvatarContainer
        url='https://www.rmanj.com/wp-content/uploads/2016/08/avatar-img-03.jpg'
        lenght={6}
        user='Alan Doe'
      />
    </ThemeProvider>
  ))
  .add('Button/Categories', () => (
    <ThemeProvider theme={theme}>
       <Categories isOpen={true}/>
    </ThemeProvider>
  ))
  

storiesOf('Layout', module)
  .add('Header', () => (
    <ThemeProvider theme={theme}>
      <Header 
        url='https://www.rmanj.com/wp-content/uploads/2016/08/avatar-img-03.jpg'
        lenght={6}
        user='Alan Doe'
      />
    </ThemeProvider>
  ))  