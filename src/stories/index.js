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
import Text from '../components/Text';
import Title from '../components/Title';
import Header from '../components/Header';
import NoteCounter from '../components/NoteCounter'
import '../index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch} from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Search';
import Note from '../components/Note';

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
  .add('Text', () => (
    <ThemeProvider theme={theme}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien egestas, laoreet sapien eu, eleifend tellus. Cras ut mauris sit amet nunc aliquet mattis in sit amet massa. Sed id nunc eget ligula pulvinar porttitor. Cras sed nisi nec ex tempus vehicula. Ut sollicitudin pellentesque rhoncus. Donec dapibus justo leo, bibendum pharetra tortor feugiat fermentum. Fusce viverra quam a libero scelerisque, id lacinia lacus sollicitudin. Sed eu dignissim magna, nec ullamcorper nunc. Nulla rutrum mauris non nunc efficitur egestas id vitae massa.</Text>
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
  .add('Note', () => (
    <ThemeProvider theme={theme}>
      <Note 
        title='My Crucial Education'
        borderColor='red'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien egestas, laoreet sapien eu, eleifend tellus. Cras ut mauris sit amet nunc aliquet mattis in sit amet massa. Sed id nunc eget ligula pulvinar porttitor. Cras sed nisi nec ex tempus vehicula. Ut sollicitudin pellentesque rhoncus. Donec dapibus justo leo, bibendum pharetra tortor feugiat fermentum. Fusce viverra quam a libero scelerisque, id lacinia lacus sollicitudin. Sed eu dignissim magna, nec ullamcorper nunc. Nulla rutrum mauris non nunc efficitur egestas id vitae massa.'
      />
    </ThemeProvider>
  ))
  .add('Note', () => (
    <ThemeProvider theme={theme}>
      <NoteCounter 
        title='My Crucial Education'
        borderColor='red'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien egestas, laoreet sapien eu, eleifend tellus. Cras ut mauris sit amet nunc aliquet mattis in sit amet massa. Sed id nunc eget ligula pulvinar porttitor. Cras sed nisi nec ex tempus vehicula. Ut sollicitudin pellentesque rhoncus. Donec dapibus justo leo, bibendum pharetra tortor feugiat fermentum. Fusce viverra quam a libero scelerisque, id lacinia lacus sollicitudin. Sed eu dignissim magna, nec ullamcorper nunc. Nulla rutrum mauris non nunc efficitur egestas id vitae massa.'
      />
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