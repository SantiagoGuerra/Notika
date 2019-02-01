import React from 'react'
import {connect} from 'react-redux'
import Main from '../components/Main'

const mapState = state => ({
  categoryButtonIsOpen: state.ui.categoryButtonIsOpen,
  notes: state.notes,
  formIsOpen: state.ui.formIsOpen
})

const MainContainer = connect(
  mapState
)(Main)

export default MainContainer