import {connect} from 'react-redux'
import Header from '../components/Header'

const mapState = state => ({
  url: state.user.picURL,
  lenght: state.notes.length,
  user: state.user.name,
  formIsOpen: state.ui.formIsOpen
})

const HeaderContainer = connect(
  mapState
)(Header)

export default HeaderContainer