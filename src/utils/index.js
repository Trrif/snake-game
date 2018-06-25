
export function getLoopValue (value, max) {
  return value > max
    ? 0
    : value < 0
      ? max
      : value
}

export function generateMap (width, height) {
  let arrayOfMap = {}

  for (let x = 0; x < width; x++) {
    arrayOfMap[x] = {}
    for (let y = 0; y < height; y++) {
      arrayOfMap[x][y] = 'empty'
    }
  }

  return arrayOfMap
}

export function findEmpty (map) {
  const filteredMap = Object.keys(map).map(x => {
    const mapX = Object.keys(map[x]).map(y => y).filter(y => map[x][y] === 'empty')
    return mapX.length !== 0
      ? mapX
      : null
  })

  let xArray = []

  for (let i = 0; i < filteredMap.length; i++) {
    if (filteredMap[i] !== null) xArray.push(i)
  }

  if (!xArray[0]) return {x: 0, y: 0} // if the all cells are filled return default object

  const randomX = +xArray[Math.floor(Math.random() * xArray.length)]
  const randomY = +filteredMap[randomX][Math.floor(Math.random() * filteredMap[randomX].length)]

  return {x: randomX, y: randomY}
}

export function getNextPosition (snakePart, mapWidth, mapHeight, directionsMath) {
  const { direction, xPosition, yPosition } = snakePart

  return direction === 'left' || direction === 'right'
    ? {xPosition: getLoopValue(xPosition + directionsMath[direction], mapWidth - 1), yPosition: yPosition}
    : {yPosition: getLoopValue(yPosition + directionsMath[direction], mapHeight - 1), xPosition: xPosition}
}
