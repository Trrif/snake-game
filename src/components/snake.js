import React, { Component } from 'react'

class Snake extends Component {
  render () {
    const { snake, cellSize, mapWidth, mapHeight } = this.props

    return snake.map(snakePart =>
      <div
        key={snakePart.id}
        style={
          {position: 'absolute',
            width: Math.floor(cellSize / 2),
            height: Math.floor(cellSize / 2) - cellSize / 2 / 2,
            transform: snakePart.direction === 'up' || snakePart.direction === 'down' ? 'rotate(90deg)' : '',
            zIndex: snakePart.part === 'head' ? 1 : 0,
            backgroundColor: snakePart.part === 'head' ? '#4d9900' : '#8cff1a',
            top: snakePart.yPosition * cellSize + Math.floor((cellSize / 2) / 2) - cellSize * mapHeight / 2 + 3,
            left: snakePart.xPosition * cellSize + Math.floor((cellSize / 2) / 2) - cellSize * mapWidth / 2}}>
      </div>)
  }
}
export default Snake
