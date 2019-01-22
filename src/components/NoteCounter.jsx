import React from 'react'
import styled from 'styled-components'
import Note from './Note'

const StyledNoteCounter = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const NoteCounter = ({title, text, borderColor}) => (
  <StyledNoteCounter>
    <Note 
      isOpen={true}
      title={title}
      text={text}
      borderColor={borderColor}
    />
  </StyledNoteCounter>
)

export default NoteCounter