import styled from "styled-components"
import {
  FormRow,
  Logo,
  Summitter
} from "../../components"
import { Link, useNavigate } from "react-router-dom"

const Reset = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="d-md-flex align-items-center justify-content-center border border-light">
      <Logo />
      <div className="form-container d-flex align-items-center jstify-content-center">
        <form className="border mx-auto" 
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/login')
          }}
        >
          <h2>Reset Password</h2>
          {/* single form row */}
          <FormRow
            label="Email Address"
            type="email"
            name="email"
            value="johndoe@gmail.com"
          />
          {/* single form row link */}
          <FormRow
            label="Password"
            type="password"
            name="password"
            value="jsoe"
          />
          {/* submit button */}
          <Summitter text="Done" />
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 36px 30px;
background-color: white;
.form-container {
  width: 100%;
  min-height: 85vh;
}
form {
  width: 100%;
  margin-top: 28px;
}
@media screen and (min-width: 1024px) {
  height: 100vh;
  padding: 0;
  max-width: 50%;
  .form-container {
    height: inherit
  }
  form {
    max-width: 377px;
  }
}
`

export default Reset
