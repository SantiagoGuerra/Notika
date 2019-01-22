import React from 'react';

import { storiesOf } from '@storybook/react';
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme'
import Badge from '../components/Badge'
import Avatar from '../components/Avatar';
import Category from '../components/Category';
import CategoryItems from '../components/CategoryItems'
import Categories from '../components/Categories'
import CategoriesContainer from '../components/CategoriesContainer'
import AvatarContainer from '../components/AvatarContainer';
import Title from '../components/Title';
import Header from '../components/Header';
import '../index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch} from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Search';

library.add(faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch)

let categories = [
{
  name: 'Education',
  color: '#1abc9c',
  userInterest: true
},
{
  name: 'Job',
  color: '#2ecc71',
  userInterest: true
},
{
  name: 'University',
  color: '#3498db',
  userInterest: true
},
{
  name: 'Sport',
  color: '#3460db',
  userInterest: true
}
]


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
  .add('Category Items', () => (
    <ThemeProvider theme={theme}>
      <CategoryItems categories={categories}/>
    </ThemeProvider>
  ))
  .add('Title', () => (
    <ThemeProvider theme={theme}>
      <Title>Hi, I'm a Title Component</Title>
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
  .add('Categories Container', () => (
    <ThemeProvider theme={theme}>
      <CategoriesContainer categories={categories}/>
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