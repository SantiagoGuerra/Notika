import React from 'react'
import styled from 'styled-components'
import AddCategory from './AddCategory'
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

  @media screen and (min-width:760px) {
    width: 300px;
  }
`
const AddCategoryContainer = ({categories}) => (
  <StyledCategoriesContainer>
    <AddCategory/>
    <CategoryItems categories={categories}/>
  </StyledCategoriesContainer>
)


export default AddCategoryContainer