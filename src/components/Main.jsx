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
  showAddCategory,
  showForm,
  hideForm,
  addCategoryIsOpen,
  hideAddCategory,
  createNote,
  note,
  handleTitleNote,
  handleTextNote,
  handleCategory,
  reset
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
        ? <Form 
            hideForm={hideForm}
            addCategoryIsOpen={addCategoryIsOpen}
            notes={notes}
            showAddCategory={showAddCategory}
            hideAddCategory={hideAddCategory}
            createNote={createNote}
            note={note}
            handleTitleNote={handleTitleNote}
            handleTextNote={handleTextNote}
            handleCategory={handleCategory}
            reset={reset}
          />
        : <FloatButton onClick={showForm}/>
    }
  </React.Fragment>
)

export default Main