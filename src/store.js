// redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import game from './reducers'

const initialState = {
  mapHeight: 10,
  mapWidth: 10,
  fruitsPeriodicity: 3,
  maxSpeed: 200,
  started: false,
  losed: false,
  cellSize: 40,
  keyCodes: {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    83: 'down',
    87: 'up',
    65: 'left',
    68: 'right'
  },
  directionsMath: {
    left: -1,
    right: 1,
    up: -1,
    down: 1
  },
  reverseDirections: {
    up: 'down',
    down: 'up',
    left: 'right',
    right: 'left'
  }
}
const store = createStore(game, initialState, applyMiddleware(thunk))
export default store
