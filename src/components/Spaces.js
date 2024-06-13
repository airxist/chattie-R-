import styled from "styled-components"
import SpaceBar from "./SpaceBar"

const Spaces = () => {
  return (
    <Wrapper>
      <SpaceBar />
    </Wrapper>
  )
}


const Wrapper = styled.div`
width: 100%;
height: calc(100vh - (70px + 110px ));
padding: 30px;
// overflow-y: scroll;
@media screen and (min-width: 1024px) {
    height: calc(100vh - (70px + 110px + 197px));
    border-top: solid 1px var(--primary-purple)
}
`

export default Spaces
