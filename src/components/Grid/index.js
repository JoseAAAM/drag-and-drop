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
    <AreasContext.Provider value={{ move }}>
      <Container>
        <Box id="area1" positions={positions}>
          AREA 1
        </Box>
        <Box id="area2" positions={positions}>
          AREA 2
        </Box>
        <Box id="area3" positions={positions}>
          AREA 3
        </Box>
        <Box id="area4" positions={positions}>
          AREA 4
        </Box>
      </Container>
    </AreasContext.Provider>
  )
}
