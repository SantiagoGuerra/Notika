
import {connect} from 'react-redux'
import Main from '../components/Main'
import {showFormAction, 
  showAddCategoryAction, 
  createNoteAction,
  handleTitleNoteAction,
  handleTextNoteAction,
  handleCategoryAction,
  resetNote
} from '../actions/'

const mapState = state => ({
  categoryButtonIsOpen: state.ui.categoryButtonIsOpen,
  notes: state.notes,
  formIsOpen: state.ui.formIsOpen,
  addCategoryIsOpen: state.ui.addCategoryIsOpen,
  note: state.note,
  noteIsOpen: state.ui.noteIsOpen
})

const mapDispatch = (dispatch, props)=> ({
  showForm: () => dispatch(showFormAction(true)),
  hideForm: () => dispatch(showFormAction(false)),
  showAddCategory: () => dispatch(showAddCategoryAction(true)),
  hideAddCategory: () => dispatch(showAddCategoryAction(false)),
  createNote: note => dispatch(createNoteAction(note)),
  handleTitleNote: title => dispatch(handleTitleNoteAction(title)),
  handleTextNote: text => dispatch(handleTextNoteAction(text)),
  handleCategory: (name, color )=> dispatch(handleCategoryAction(name, color)),
  reset: () => dispatch(resetNote())
})

const MainContainer = connect(
  mapState, mapDispatch
)(Main)

export default MainContainer