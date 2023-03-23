import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import AreasContext from '../Grid/context'

import { Container } from './styles'

export default function Box({ children, gridArea, id }) {
  const ref = useRef()

  const { move, positions } = useContext(AreasContext)

  console.log(positions)

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'BOX',
    item: { gridArea, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  const [, dropRef] = useDrop({
    accept: 'BOX',
    hover: (item, monitor) => {
      const targetId = id
      const targetArea = gridArea

      const draggedArea = item.gridArea
      const draggedId = item.id

      if (draggedArea === targetArea) return

      move(draggedArea, draggedId, targetArea, targetId)
    },
    drop: (item) => {
      item.gridArea = gridArea
    }
  })

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging} style={{ gridArea: gridArea }}>
      {children}
    </Container>
  )
}
