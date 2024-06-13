import styled from "styled-components"
import Profile from "./Profile"

const TitleBar = ({space}) => {
    return (
        <Wrapper className="d-flex align-items-center justify-content-between">
          <h4>{space}</h4>
          <Profile show={false} />
        </Wrapper>
      )
}

const Wrapper = styled.div`
padding: 15px;
height: 70px;
background-color: var(--chat-bg-purple);
position: sticky;
top:0;
left: 0;
@media screen and (min-width: 1024px) {
  padding: 15px 95px;
}
`

export default TitleBar
