import { findEmpty, generateMap, getNextPosition, getLoopValue } from '../utils'

const GENERATE_FRUIT = 'GENERATE_FRUIT'
const MOVE_SNAKE_PARTS = 'MOVE_SNAKE_PARTS'
const SET_STATUS = 'SET_STATUS'
const EXPAND_SNAKE = 'EXPAND_SNAKE'
const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
const START = 'START'
const EXIT = 'EXIT'
const CHANGE_VALUE = 'CHANGE_VALUE'

export function generateFruit () {
  const payload = { findEmpty }

  return {
    type: GENERATE_FRUIT,
    payload
  }
}

export function moveSnakeParts () {
  const payload = { getNextPosition }

  return {
    type: MOVE_SNAKE_PARTS,
    payload
  }
}

export function setStatus (x, y, status) {
  const payload = { x, y, status }

  return {
    type: SET_STATUS,
    payload
  }
}

export function expandSnake () {
  const payload = { getLoopValue }

  return {
    type: EXPAND_SNAKE,
    payload
  }
}

export function changeDirection (event) {
  const { keyCode } = event
  const payload = { keyCode }

  return {
    type: CHANGE_DIRECTION,
    payload
  }
}

export function worldTicker (tickModificator) {
  return (dispatch, getState) => {
    const { mapHeight, mapWidth, maxSpeed, snake, map, directionsMath } = getState()
    const headNextPosition = getNextPosition(snake[0], mapWidth, mapHeight, directionsMath)
    const tailOfSnake = snake[snake.length - 1]

    dispatch(moveSnakeParts())
    dispatch(setStatus(tailOfSnake.xPosition, tailOfSnake.yPosition, 'empty'))
    dispatch(setStatus(headNextPosition.xPosition, headNextPosition.yPosition, 'snakePart'))

    if (typeof tickModificator === 'function') {
      tickModificator()
    }

    switch (map[headNextPosition.xPosition][headNextPosition.yPosition]) {
      case 'snakePart': {
        dispatch(changeValue('losed', true))
        break
      }
      case 'fruit': {
        setTimeout(() => dispatch(worldTicker(() => dispatch(expandSnake()))), 1000 / snake.length < maxSpeed ? maxSpeed : 1000 / snake.length)
        break
      }
      default: {
        if (Math.floor(Math.random() * 3) === 2) {
          setTimeout(() => dispatch(worldTicker(() => dispatch(generateFruit()))), 1000 / snake.length < maxSpeed ? maxSpeed : 1000 / snake.length)
        } else {
          setTimeout(() => dispatch(worldTicker()), 1000 / snake.length < maxSpeed ? maxSpeed : 1000 / snake.length)
        }
      }
    }
  }
}

export function start () {
  const payload = { generateMap }

  return {
    type: START,
    payload
  }
}

export function exit () {
  return {
    type: EXIT
  }
}

export function changeValue (settingName, value) {
  const payload = { settingName, value }

  return {
    type: CHANGE_VALUE,
    payload
  }
}
