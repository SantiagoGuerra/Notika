import React from 'react'
import Center from './Center'
import Categories from './Categories';
import CategoriesContainer from './CategoriesContainer'
import NoteContainer from './NoteContainer'
import FloatButton from './FloatButton';
import Form from './Form'

const Main = ({
  formIsOpen,
  categoryButtonIsOpen,
  notes,
  showForm,
  hideForm
}) => (
  <React.Fragment>
    <Center>
      <Categories
        isOpen={categoryButtonIsOpen}
      />
    {(categoryButtonIsOpen) 
      ?  <CategoriesContainer
            categories = {notes.map(note => note.category)}
        />
      : undefined
      }
    </Center>
    <NoteContainer 
      notes={notes}
    />
    {
      (formIsOpen) 
        ? <Form hideForm={hideForm}/>
        : <FloatButton onClick={showForm}/>
    }
  </React.Fragment>
)

export default Main