import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import GlobalStyle from './styles/global'

import Grid from './components/Grid'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Grid />
      <GlobalStyle />
    </DndProvider>
  )
}

export default App
