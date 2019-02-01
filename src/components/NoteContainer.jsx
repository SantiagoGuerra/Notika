import React from 'react'
import styled from 'styled-components'
import Note from './Note'

const StyledNoteContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${props => props.theme.normalSpacingSize};
`


const NoteContainer = ({notes}) => (
  <StyledNoteContainer>
    {notes.map(note => (
      <Note 
        key= {note.id}
        title={note.title}
        text={note.text}
        isOpen={note.isOpen}
        borderColor={note.category.color}
      />
    ))}
  </StyledNoteContainer>
)

export default NoteContainer