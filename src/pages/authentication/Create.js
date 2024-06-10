import styled from "styled-components"
import { FormRow, Logo, Summitter } from "../../components"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../../context";

const CreateYourSpace = () => {
  const { setAuthImg } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/create-space"){
      setAuthImg(false);
    } else {
      setAuthImg(true);
    }
  }, [])

  return (
    <Wrapper className="d-block d-lg-flex align-items-center justify-content-center">
      <Logo />
      <div className="form-container mx-auto border border-primary">
        <form className="border">
            <h3 className="text-lg-center">Create Your Own Space</h3>
            <FormRow
                label="It’s your private space, why dont you give it a name"
                type="text"
                name="team"
                value="My Dev Team"
            />
            <Summitter
                text="Next"
            />
        </form>
        <p className="policy-para">
            By continuing, you are agreeing to our terms of service, user terms of service, privacy policy and cookie policy
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 100vh;
padding: 36px 30px 150px;
.form-container {
  margin-top: 65px
}
.policy-para {
  margin-top: 26px;
}
@media screen and (min-width: 1024px) {
  .form-container {
    max-width: 512px;
    margin-top: unset
  }
}
`

export default CreateYourSpace
