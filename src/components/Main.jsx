import React from 'react'
import NoteContainer from './NoteContainer'
import FloatButton from './FloatButton';
import Form from './Form'
import NoteCounter from './NoteCounter'

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
  reset,
  noteIsOpen
}) => (
  <React.Fragment>
    {/* <Center> i am working in this section
      <Categories
        isOpen={categoryButtonIsOpen}
      />
    {(categoryButtonIsOpen) 
      ?  <CategoriesContainer
            categories = {notes.map(note => note.category)}
        />
      : undefined
      }
    </Center> */}
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
    {
      (noteIsOpen)
        ? <NoteCounter 
          isOpen={noteIsOpen}
        />
        : undefined
    }
  </React.Fragment>
)

export default Main