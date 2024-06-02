import styled from "styled-components"

const VerifyEmail = () => {
  return (
    <Wrapper className="d-flex align-items-center justify-content-center">
      <div className="border">
        <p className="confirm">Confirmation Keys have been sent to your email address</p>
        <div className="indicator">

        </div>
        <p className="resend-link">
            <a href="/">
                Resend confirmation key
            </a>
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`


`

export default VerifyEmail
