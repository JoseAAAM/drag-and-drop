import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import AreasContext from '../Grid/context'

import { Container } from './styles'

export default function Area({ children, gridArea }) {
  const ref = useRef()

  const { move } = useContext(AreasContext)

  const [{ isOverArea }, dropRef] = useDrop({
    accept: 'BOX',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverArea: gridArea
    }),
    hover: (item) => {
      move('', item.id, isOverArea, '')
    }
  })

  dropRef(ref)

  return (
    <Container ref={ref} style={{ gridArea }}>
      {children}
    </Container>
  )
}
