import styled from "styled-components"
import {
  Bars,
  Back,
  Indicate
} from "../../components"

const Verify = () => {
  return (
    <Wrapper className="d-flex align-items-center justify-content-center position-relative">
      <Bars />
      {/* link to register */}
      <Back to="/" text="Back" />
      <div className="confirm-box text-center border">
        <p className="confirm-text m-0">Confirmation Keys have been sent to your email address</p>
        <div className="indicator d-flex align-items-center justify-content-between mx-auto my-3">
          <Indicate />
          <Indicate />
          <Indicate />
          <Indicate />
        </div>
        <p className="m-0">
            <a href="/" className="text-purple">
                Resend confirmation key
            </a>
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 100vh;
padding: 30px;
background-color: white;
isolation: isolate;
.back {
  position: absolute;
  top: 30px;
  left: 30px;
}
.confirm-box {
  width: 100%;
  min-height: 126px;
}
.indicator {
  width: 158px;
}
@media screen and (min-width: 1024px) {
  padding: 50px;
  width: 50%;
  .back {
    top: 50px;
    left: 50px;
  }
  .confirm-box {
    width: 244px;
  }
}
`

export default Verify
