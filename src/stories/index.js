import React from 'react';

import { storiesOf } from '@storybook/react';
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme'
import Badge from '../components/Badge'
import Avatar from '../components/Avatar';
import Category from '../components/Category';
import Categories from '../components/Categories'
import AvatarContainer from '../components/AvatarContainer';
import Header from '../components/Header';
import '../index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch} from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Search';

library.add(faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch)

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
  .add('Search', () => (
    <ThemeProvider theme={theme}>
      <Search/>
    </ThemeProvider>
  ))
  .add('Category', () => (
    <ThemeProvider theme={theme}>
      <Category categoryName='Education' pointColor='#2ecc71'/>
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