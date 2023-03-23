import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import AreasContext from '../Grid/context'

import { Container } from './styles'

export default function Box({ children, gridArea, id }) {
  const ref = useRef()

  const { move, positions } = useContext(AreasContext)

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'BOX',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  const [, dropRef] = useDrop({
    accept: 'BOX',
    hover: (item, monitor) => {
      const targetId = id
      const targetArea = positions[id]

      const draggedArea = positions[item.id]
      const draggedId = item.id

      if (draggedArea === targetArea) return

      const targetSize = ref.current.getBoundingClientRect()
      const targetCenterY = (targetSize.bottom - targetSize.top) / 2
      const targetCenterX = (targetSize.right - targetSize.left) / 2

      const draggedOffset = monitor.getClientOffset()
      const draggedRight = Math.abs(draggedOffset.x - targetSize.right)
      const draggedLeft = Math.abs(draggedOffset.x - targetSize.left)
      const draggedTop = Math.abs(draggedOffset.y - targetSize.top)
      const draggedBottom = Math.abs(draggedOffset.y - targetSize.bottom)

      if (
        targetCenterY * 0.25 > draggedTop ||
        targetCenterY * 0.25 > draggedBottom
      )
        return

      if (
        targetCenterX * 0.25 > draggedRight ||
        targetCenterX * 0.25 > draggedLeft
      )
        return

      move(draggedArea, draggedId, targetArea, targetId)
    }
  })

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging} style={{ gridArea: gridArea }}>
      {children}
    </Container>
  )
}
