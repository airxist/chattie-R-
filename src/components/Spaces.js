import styled from "styled-components"

const Spaces = () => {
  return (
    <Wrapper>

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
