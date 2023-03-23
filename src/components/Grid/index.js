import React, { useState } from 'react'

import AreasContext from './context'

import { Container } from './styles'

import Box from '../Box'

export default function Grid() {
  const [positions, setPositions] = useState({
    area1: 'a',
    area2: 'b',
    area3: 'c',
    area4: 'd'
  })

  function move(draggedArea, draggedId, targetArea, targetId) {
    setPositions((oldPositions) => ({
      ...oldPositions,
      [targetId]: draggedArea,
      [draggedId]: targetArea
    }))
  }

  return (
    <AreasContext.Provider value={{ move, positions }}>
      <Container>
        <Box gridArea={positions.area1} id="area1">
          AREA 1
        </Box>
        <Box gridArea={positions.area2} id="area2">
          AREA 2
        </Box>
        <Box gridArea={positions.area3} id="area3">
          AREA 3
        </Box>
        <Box gridArea={positions.area4} id="area4">
          AREA 4
        </Box>
      </Container>
    </AreasContext.Provider>
  )
}
