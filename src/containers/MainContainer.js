import React from 'react'
import {connect} from 'react-redux'
import Main from '../components/Main'
import {showFormAction, showAddCategoryAction} from '../actions/'

const mapState = state => ({
  categoryButtonIsOpen: state.ui.categoryButtonIsOpen,
  notes: state.notes,
  formIsOpen: state.ui.formIsOpen,
  addCategoryIsOpen: state.ui.addCategoryIsOpen
})

const mapDispatch = (dispatch, props)=> ({
  showForm: () => dispatch(showFormAction(true)),
  hideForm: () => dispatch(showFormAction(false)),
  showAddCategory: () => dispatch(showAddCategoryAction(true)),
  hideAddCategory: () => dispatch(showAddCategoryAction(false))
})

const MainContainer = connect(
  mapState, mapDispatch
)(Main)

export default MainContainer