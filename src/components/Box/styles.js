import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.isDragging ? 'transparent' : 'green')};
  font-size: 36px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.isDragging ? '0px solid black' : '5px solid black'};
  opacity: ${(props) => (props.isDragging ? 0 : 1)};
  cursor: grab;
`
