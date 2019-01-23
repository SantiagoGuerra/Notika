import React from 'react'
import styled from 'styled-components'
import TitleInput from './TitleInput'
import ButtonEllipsis from './ButtonEllipsis'
import NoteText from './NoteText'
import Button from './Button'

const StyledFormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
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
`

const FormItem = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${props => props.theme.smallSpacingSize};
  justify-content: ${props => props.end ? 'flex-end' : 'flex-start'};
` 

const Form = ({}) => (
  <StyledFormContainer>
    <StyledForm>
      <FormItem>
        <TitleInput />
        <ButtonEllipsis />
      </FormItem>
      <FormItem>
        <NoteText />
      </FormItem>
      <FormItem end>
        <Button opposite>
          Cancel
        </Button>
        <Button>
          Create
        </Button>        
      </FormItem>                                          
    </StyledForm>    
  </StyledFormContainer>
)

export default Form

