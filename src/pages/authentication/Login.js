import styled from "styled-components"
import {
  SwitchRoute,
  FormRow,
  Logo,
  Summitter,
  Bars
} from "../../components"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="d-md-flex align-items-center justify-content-center border border-light position-relative">
      <Bars />
      <Logo />
      <div className="form-container d-flex align-items-center jstify-content-center">
        <form className="border mx-auto" 
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/dashboard')
          }}
        >
          <SwitchRoute
            text1="Login"
            text1Action="/login"
            text2="Register"
            text2Action="/"
          />
          {/* single form row */}
          <FormRow
            label="Email Address"
            type="email"
            name="email"
            value="johndoe@gmail.com"
          />
          {/* single form row link */}
          <FormRow
            link="Forgot password"
            linkAddress="/forgot-password"
            label="Password"
            type="password"
            name="password"
            value="jsoe"
          />
          {/* submit button */}
          <Summitter text="Login" />
          <p className="m-0 mt-2">
            You do not have an account? <Link to='/'>Register</Link>
          </p>
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
isolation: isolate;
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

export default Login
