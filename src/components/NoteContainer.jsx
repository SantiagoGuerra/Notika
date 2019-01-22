import React from 'react'
import styled from 'styled-components'
import Note from './Note'

const StyledNoteContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.normalSpacingSize};
`


const NoteContainer = ({notes}) => (
  <StyledNoteContainer>
    {notes.map(note => (
      <Note 
        title={note.title}
        text={note.text}
        isOpen={note.isOpen}
        borderColor={note.borderColor}
      />
    ))}
  </StyledNoteContainer>
)

export default NoteContainer