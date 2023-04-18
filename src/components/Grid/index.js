import React, { useState } from 'react'

import AreasContext from './context'

import { Container } from './styles'

import Box from '../Box'
import Area from '../Area'

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
        <Area gridArea="a">
          <Box id="area1" positions={positions}>
            AREA 1
          </Box>
        </Area>
        <Area gridArea="b">
          <Box id="area2" positions={positions}>
            AREA 2
          </Box>
        </Area>
        <Area gridArea="c"></Area>
        <Area gridArea="d"></Area>
        {/* <Box id="area1" positions={positions}>
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
        </Box> */}
      </Container>
    </AreasContext.Provider>
  )
}
