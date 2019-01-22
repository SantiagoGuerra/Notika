import React from 'react'
import styled from 'styled-components'
import Category from './Category'

const StyledCategoryItems = styled.div`
  margin-top: ${props => props.theme.normalSpacingSize};
  display: flex
  flex-direction: column;
`


const CategoryItems = ({categories}) => (
  <StyledCategoryItems categories>
    {categories.map(category => (
      <Category categoryName={category.name} pointColor={category.color}/>
    ))}
  </StyledCategoryItems>
)

export default CategoryItems