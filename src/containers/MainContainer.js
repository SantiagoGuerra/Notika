import React from 'react'
import {connect} from 'react-redux'
import Main from '../components/Main'
import {showFormAction} from '../actions/'

const mapState = state => ({
  categoryButtonIsOpen: state.ui.categoryButtonIsOpen,
  notes: state.notes,
  formIsOpen: state.ui.formIsOpen
})

const mapDispatch = dispatch => ({
  showForm: () => dispatch(showFormAction(true)),
  hideForm: () => dispatch(showFormAction(false))
})

const MainContainer = connect(
  mapState, mapDispatch
)(Main)

export default MainContainer