import { getNextPosition, getLoopValue, generateMap, findEmpty } from './index'

it('is the value are looped?', () => {
  expect(getLoopValue(10, 9)).toEqual(0)
  expect(getLoopValue(-1, 9)).toEqual(9)
})

it('is the width and height of map correct', () => {
  const map = generateMap(5, 5)
  expect(Object.keys(map).length).toEqual(5)
  expect(Object.keys(map[0]).length).toEqual(5)
  let sumOfCells = 0
  for (let x = 0; x < Object.keys(map).length; x++) {
    sumOfCells += Object.keys(map[x]).length
  }
  expect(sumOfCells).toEqual(25)
})

it('are findEmpty finding the correct cell', () => {
  const filledMap = {
    0: {
      0: 'filled',
      1: 'filled'
    },
    1: {
      0: 'filled',
      1: 'filled'
    }
  }
  const map = {
    0: {
      0: 'filled',
      1: 'filled',
      2: 'filled'
    },
    1: {
      0: 'filled',
      1: 'filled',
      2: 'filled',
      3: 'empty'
    }
  }

  expect(findEmpty(filledMap)).toEqual({x: 0, y: 0})
  expect(findEmpty(map)).toEqual({x: 1, y: 3})
})
