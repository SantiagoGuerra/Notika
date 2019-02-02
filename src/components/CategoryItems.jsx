import React from 'react'
import styled from 'styled-components'
import Category from './Category'

const StyledCategoryItems = styled.div`
  margin-top: ${props => props.theme.normalSpacingSize};
  display: flex;
  flex-direction: column;
  width: 100%;
`


const CategoryItems = ({categories, handleCategory, hideAddCategory}) => (
  <StyledCategoryItems categories>
    {
      categories
        .filter((category, i ) => {
            return category !== ''  
        })
        .map(category => (
          <Category categoryName={category.name} pointColor={category.color} key={category.id} handleCategory={handleCategory} hideAddCategory={hideAddCategory}/>
        ))
    }
  </StyledCategoryItems>
)

export default CategoryItems