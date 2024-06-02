import styled from "styled-components"
import background from '../assets/images/bg.jpg'

const Bg = () => {
  return (
    <Wrapper className="bg d-none d-lg-block position-relative">
      <img src={background} alt="bg" />
      <div className="position-absolute border border-danger"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
  max-width: 50%;
  height: 705px;
  div {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(#8F55B4, #3E254E);
    z-index: 2;
    opacity: 0.5
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default Bg
