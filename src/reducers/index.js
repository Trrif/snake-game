const game = (state = {}, action) => {
  const { payload } = action

  switch (action.type) {
    case 'GENERATE_FRUIT': {
      const { findEmpty } = payload
      const { map } = state
      const { x, y } = findEmpty(map)

      return {
        ...state,
        map: {
          ...map,
          [x]: {
            ...map[x],
            [y]: 'fruit'
          }
        }
      }
    }

    case 'MOVE_SNAKE_PARTS': {
      const { getNextPosition } = payload
      const { mapWidth, mapHeight, snake, directionsMath } = state

      return {
        ...state,
        snake: snake.map((snakePart, index) => {
          const nextPosition = getNextPosition(snakePart, mapWidth, mapHeight, directionsMath)
          return index === 0
            ? {...snakePart, ...nextPosition}
            : {...snakePart, direction: snake[index - 1].direction, ...nextPosition}
        })
      }
    }

    case 'EXPAND_SNAKE': {
      const { getLoopValue } = payload
      const { snake, mapWidth, mapHeight, directionsMath } = state
      const tailOfSnake = snake[snake.length - 1]
      const { direction, xPosition, yPosition } = tailOfSnake
      const nextPositions = {
        x: direction === 'left' || direction === 'right'
          ? getLoopValue(xPosition - directionsMath[direction], mapWidth - 1)
          : xPosition,
        y: direction === 'down' || direction === 'up'
          ? getLoopValue(yPosition - directionsMath[direction], mapHeight - 1)
          : yPosition}

      return {
        ...state,
        snake: [...snake.map((snakePart, index) => {
          return index === snake.length - 1
            ? {...snakePart, part: 'body'}
            : snakePart
        }), {...tailOfSnake,
          id: tailOfSnake.id + 1,
          xPosition: nextPositions.x,
          yPosition: nextPositions.y}]

      }
    }

    case 'SET_STATUS': {
      const { map } = state

      return {
        ...state,
        map: {
          ...map,
          [payload.x]: {
            ...map[payload.x],
            [payload.y]: payload.status
          }
        }
      }
    }

    case 'START': {
      const { generateMap } = payload
      const { mapWidth, mapHeight } = state

      return {
        ...state,
        started: true,
        losed: false,
        snake: [
          {
            id: 0,
            part: 'head',
            xPosition: Math.floor(mapWidth / 2 - 1),
            yPosition: Math.floor(mapHeight / 2 - 1),
            direction: 'left'
          },
          {
            id: 1,
            part: 'body',
            xPosition: Math.floor(mapWidth / 2 - 1) + 1,
            yPosition: Math.floor(mapHeight / 2 - 1),
            direction: 'left',
            nextDirection: null
          },
          {
            id: 2,
            part: 'tail',
            xPosition: Math.floor(mapWidth / 2 - 1) + 2,
            yPosition: Math.floor(mapHeight / 2 - 1),
            direction: 'left',
            nextDirection: null
          }
        ],
        map: generateMap(mapWidth, mapHeight)
      }
    }

    case 'EXIT': {
      return {
        ...state,
        started: false
      }
    }

    case 'CHANGE_VALUE': {
      return +payload.value
        ? {
          ...state,
          [payload.settingName]: +payload.value
        }
        : state
    }

    case 'CHANGE_DIRECTION': {
      const { keyCode } = payload
      const { keyCodes, reverseDirections, snake } = state

      if (keyCodes[keyCode] && snake[1].direction !== reverseDirections[keyCodes[keyCode]]) {
        return {
          ...state,
          snake: snake.map((snakePart, i) =>
            i === 0
              ? {...snakePart, direction: keyCodes[keyCode]}
              : snakePart
          )}
      } else return state
    }

    default: return state
  }
}
export default game
