import React, { Component } from 'react'

class Map extends Component {
  render () {
    const { map, cellSize, mapWidth, mapHeight } = this.props

    return Object.keys(map).map(x =>
      Object.keys(map[x]).map(y =>
        <div
          key={'' + x + y}
          style={
            {width: cellSize,
              height: cellSize,
              border: '1px solid #DCDCDC',
              backgroundColor: '#F5F5F5',
              position: 'absolute',
              top: y * cellSize - cellSize * mapHeight / 2,
              left: x * cellSize - cellSize * mapWidth / 2}}>
          {(map[x][y] === 'fruit')
            ? <div
              style={
                {width: Math.floor(cellSize / 4),
                  height: Math.floor(cellSize / 4),
                  backgroundColor: '#DEB887',
                  position: 'absolute',
                  top: cellSize / 2 - Math.floor((cellSize / 4) / 2),
                  left: cellSize / 2 - Math.floor((cellSize / 4) / 2)
                }}>
            </div>
            : null}
        </div>))
  }
}
export default Map
