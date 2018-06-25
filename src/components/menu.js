import React, { Component } from 'react'

class Menu extends Component {
  render () {
    const { start, changeValue, mapWidth, mapHeight, cellSize, maxSpeed } = this.props
    return (<div className='menuContainer'>
      <div className='description'>
        Максимальная скорость змейки (чем ниже значение тем выше максимальная скорость)
      </div>
      <input className='settings' onChange={e => changeValue('maxSpeed', e.target.value)} value={maxSpeed} />
      <div className='description'>
        Размер ячейки карты
      </div>
      <input className='settings' onChange={e => changeValue('cellSize', e.target.value)} value={cellSize} />
      <div className='description'>
        Высота карты
      </div>
      <input className='settings' onChange={e => changeValue('mapHeight', e.target.value)} value={mapHeight} />
      <div className='description'>
        Ширина карты
      </div>
      <input className='settings' onChange={e => changeValue('mapWidth', e.target.value)} value={mapWidth} />
      <button className='button' onClick={start}>
      Старт
      </button>
    </div>)
  }
}
export default Menu
