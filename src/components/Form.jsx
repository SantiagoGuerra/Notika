import React from 'react'
import styled from 'styled-components'
import TitleInput from './TitleInput'
import ButtonEllipsis from './ButtonEllipsis'
import NoteText from './NoteText'
import Button from './Button'
import AddCategoryContainer from './AddCategoryContainer'

const StyledFormContainer = styled.div`
  height: 100%;
  width: 100vw;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`

const StyledForm = styled.form`
  width: 300px;
  border: .5px solid ${props => props.theme.mainColor};
  padding: ${props => props.theme.normalSpacingSize};
  box-shadow: 0px 4px 8px rgba(0,0,0, .2);
  border-radius: ${props => props.theme.normalBorder};
  background: #FFF;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 760px){
    width: 500px;    
  }
`

const FormItem = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${props => props.theme.smallSpacingSize};
  justify-content: ${props => props.end ? 'flex-end' : 'flex-start'};
` 

const Form = ({hideForm, 
  addCategoryIsOpen, 
  notes,
  showAddCategory, 
  hideAddCategory, 
  createNote, 
  note, 
  handleTitleNote,
  handleTextNote,
  handleCategory,
  reset
}) => (
  <StyledFormContainer>
    <StyledForm>
      <FormItem>
        <TitleInput handleTitleNote={handleTitleNote}/>
        <ButtonEllipsis
          showAddCategory={showAddCategory}
          addCategoryIsOpen={addCategoryIsOpen}
        />
      </FormItem>
      <FormItem>
        <NoteText handleTextNote={handleTextNote}/>
      </FormItem>
      <FormItem end="true">
        <Button opposite hideForm={hideForm} hideAddCategory={hideAddCategory}>
          Cancel
        </Button>
        <Button hideForm={hideForm} hideAddCategory={hideAddCategory} createNote={createNote} note={note} reset={reset}>
          Create
        </Button>        
      </FormItem>                                          
    </StyledForm>
    {(addCategoryIsOpen)
      ? <AddCategoryContainer
          categories= {notes.map(note => note.category)}
          hideAddCategory={hideAddCategory}
          handleCategory={handleCategory}
        />
      : undefined}    
  </StyledFormContainer>
)

export default Form

