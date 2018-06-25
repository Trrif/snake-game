import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateFruit, moveSnakeParts, setStatus, expandSnake, changeDirection, start, changeValue, exit, worldTicker } from './actions'
import './App.css'
import World from './components/world'
import Menu from './components/menu'

class App extends Component {
  render () {
    const { started } = this.props
    return (
      <div className="App" onKeyDown={this.changeDirection}>
        <div className="AppContainer">
          {started
            ? <World {...this.props} />
            : <Menu {...this.props} />}
          <div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    ...state
  }
}

const AppConnect = connect(
  mapStateToProps,
  {generateFruit,
    moveSnakeParts,
    setStatus,
    expandSnake,
    changeDirection,
    start,
    changeValue,
    exit,
    worldTicker})(App)
export default AppConnect
