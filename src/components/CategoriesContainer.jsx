import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import CategoryItems from './CategoryItems'

const StyledCategoriesContainer = styled.div`
  padding: ${props => props.theme.normalSpacingSize};
  border: .5px solid ${props => props.theme.mainColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${props => props.theme.normalBorder};
  width: 260px;
  margin-top: ${props => props.theme.normalSpacingSize};
  @media screen and (min-width: 760px) {
    width: 300px
  }
`
const CategoriesContainer = ({categories}) => (
  <StyledCategoriesContainer>
    <Search/>
    <CategoryItems categories={categories}/>
  </StyledCategoriesContainer>
)


export default CategoriesContainer