import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
  display: grid;
  grid-template-areas:
    'a b'
    'c d';
  grid-gap: 24px;
  padding: 24px;
`
