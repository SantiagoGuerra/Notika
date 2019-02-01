import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import MainContainer from '../containers/MainContainer'
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <MainContainer/>
      </React.Fragment>
    )
  }
}