import React from 'react';

import { storiesOf } from '@storybook/react';
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme'
import Badge from '../components/Badge'
import Avatar from '../components/Avatar';
import NoteContainer from '../components/NoteContainer'
import Category from '../components/Category';
import TitleInput from '../components/TitleInput'
import AddCategory from '../components/AddCategory'
import AddCategoryContainer from '../components/AddCategoryContainer'
import CategoryItems from '../components/CategoryItems'
import Categories from '../components/Categories'
import CategoriesContainer from '../components/CategoriesContainer'
import AvatarContainer from '../components/AvatarContainer';
import Form from '../components/Form';
import Text from '../components/Text';
import Title from '../components/Title';
import NoteText from '../components/NoteText';
import Header from '../components/Header';
import NoteCounter from '../components/NoteCounter'
import '../index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch, faPlus, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Search';
import Button from '../components/Button';
import Note from '../components/Note';
import FloatButton from '../components/FloatButton';
import ButtonEllipsis from '../components/ButtonEllipsis';

library.add(faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch, faPlus, faEllipsisV)

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


const notes = [
  {
    title: 'Education',
    text:'Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien egessit amet, consectetur adipiscing elit. Sed vel sapien egestas, laoreet sapien eu, eleifend tellus. Cras ut mauris sit amet nunc aliquet mattis in sit amet massa. Sed id nunc eget ligula pulvinar porttitor. Cras sed nisi nec ex tempus vehicula. Ut sollicitudin pellentesque rhoncus. Donec dapibus justo leo, bibendum pharetra tortor feugiat fermentum. Fusce viverra quam a libero scelerisque, id lacinia lacus sollicitudin. Sed eu dignissim magna, nec ullamcorper nunc. Nulla rutrum mauris non nunc efficitur egestas id vitae massa.',
    borderColor: '#3450db',
    isOpen: false,
  },
  {
    title: 'Job',
    text:'Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien egessit amet, consectetur adipiscing elit. Sed vel sapien egestas, laoreet sapien eu, eleifend tellus. Cras ut mauris sit amet nunc aliquet mattis in sit amet massa. Sed id nunc eget ligula pulvinar porttitor. Cras sed nisi nec ex tempus vehicula. Ut sollicitudin pellentesque rhoncus. Donec dapibus justo leo, bibendum pharetra tortor feugiat fermentum. Fusce viverra quam a libero scelerisque, id lacinia lacus sollicitudin. Sed eu dignissim magna, nec ullamcorper nunc. Nulla rutrum mauris non nunc efficitur egestas id vitae massa.',
    borderColor: '#3498db',
    isOpen: false,
  },
  {
    title: 'My Dreams',
    text:'Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien egessit amet, consectetur adipiscing elit. Sed vel sapien egestas, laoreet sapien eu, eleifend tellus. Cras ut mauris sit amet nunc aliquet mattis in sit amet massa. Sed id nunc eget ligula pulvinar porttitor. Cras sed nisi nec ex tempus vehicula. Ut sollicitudin pellentesque rhoncus. Donec dapibus justo leo, bibendum pharetra tortor feugiat fermentum. Fusce viverra quam a libero scelerisque, id lacinia lacus sollicitudin. Sed eu dignissim magna, nec ullamcorper nunc. Nulla rutrum mauris non nunc efficitur egestas id vitae massa.',
    borderColor: '#5020db',
    isOpen: false,
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
  .add('Title Input', () => (
    <ThemeProvider theme={theme}>
      <TitleInput/>
    </ThemeProvider>
  ))
  .add('Button Ellipsis', () => (
    <ThemeProvider theme={theme}>
      <ButtonEllipsis/>
    </ThemeProvider>
  ))
  .add('Note Text', () => (
    <ThemeProvider theme={theme}>
      <NoteText/>
    </ThemeProvider>
  ))
  .add('Button', () => (
    <ThemeProvider theme={theme}>
    <div>
    <Button>
        Create
      </Button>
      <Button opposite>
        Cancel
      </Button>
    </div>
    </ThemeProvider>
  ))
  .add('Add Category', () => (
    <ThemeProvider theme={theme}>
      <AddCategory/>
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
  .add('Counter Note', () => (
    <ThemeProvider theme={theme}>
      <NoteCounter 
        title='My Crucial Education'
        borderColor='red'
        text='Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien eges sit amet, consectetur adipiscing elit. Sed vel sapien egessit amet, consectetur adipiscing elit. Sed vel sapien egestas, laoreet sapien eu, eleifend tellus. Cras ut mauris sit amet nunc aliquet mattis in sit amet massa. Sed id nunc eget ligula pulvinar porttitor. Cras sed nisi nec ex tempus vehicula. Ut sollicitudin pellentesque rhoncus. Donec dapibus justo leo, bibendum pharetra tortor feugiat fermentum. Fusce viverra quam a libero scelerisque, id lacinia lacus sollicitudin. Sed eu dignissim magna, nec ullamcorper nunc. Nulla rutrum mauris non nunc efficitur egestas id vitae massa.'
      />
    </ThemeProvider>
  ))
  .add('Float Button', () => (
    <ThemeProvider theme={theme}>
      <FloatButton/>
    </ThemeProvider>
  ))
  .add('Form', () => (
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>
  ))
  .add('Add Category Container', () => (
    <ThemeProvider theme={theme}>
      <AddCategoryContainer categories={categories}/>
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
  .add('Notes Container', () => (
    <ThemeProvider theme={theme}>
      <NoteContainer
        notes={notes}
      />
    </ThemeProvider>
  ))    