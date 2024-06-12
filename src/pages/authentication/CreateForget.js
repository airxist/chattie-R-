import styled from "styled-components"
import {
  Bars,
  FormRow, 
  Logo, 
  Summitter } from "../../components"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../../context";

const CreateForget = ({
  hero,
  label,
  policy,
  value,
  submitAction
}) => {
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
      <Bars />
      <Logo />
      <div className="form-container mx-auto d-flex align-items-center justify-content-center flex-column">
        <form onSubmit={submitAction}>
            <h3 className="text-lg-center">{hero}</h3>
            <FormRow
                label={label}
                type="text"
                name="team"
                value={value}
            />
            <Summitter
                text="Next"
            />
        </form>
        {policy && <p className="policy-para">{policy}</p>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 36px 30px;
background-color: white;
isolation: isolate;
.form-container {
  width: 100%;
  min-height: 85vh;
}
form {
  width: 100%;
  margin-top: 28px;
}
.policy-para {
  margin-top: 26px;
}
@media screen and (min-width: 1024px) {
  padding: 0;
  .form-container {
    max-width: 512px;
    margin-top: unset
  }
}
`

export default CreateForget
