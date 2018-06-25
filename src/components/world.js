import React, { Component } from 'react'
import Map from './map'
import Snake from './snake'

class World extends Component {
  componentDidMount () {
    const { changeDirection, worldTicker } = this.props
    worldTicker()
    window.onkeydown = changeDirection
  }
  render () {
    const { start, exit, losed, worldTicker } = this.props
    return losed
      ? <div className='loseMenu'>
        <button className='button' onClick={() => worldTicker(start)}>
          Рестарт
        </button>
        <button className='button' onClick={exit}>
          Обратно в меню
        </button>
      </div>
      : <React.Fragment>
        <Map {...this.props} />
        <Snake {...this.props} />
      </React.Fragment>
  }
}

export default World
