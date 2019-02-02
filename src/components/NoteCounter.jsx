import React from 'react'
import styled from 'styled-components'
import Note from './Note'

const StyledNoteCounter = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .5);
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
`

const NoteCounter = ({title, text, borderColor, id}) => (
  <StyledNoteCounter>
    <Note 
      isOpen={true}
      title={title}
      text={text}
      borderColor={borderColor}
      id={id}
    />
  </StyledNoteCounter>
)

export default NoteCounter