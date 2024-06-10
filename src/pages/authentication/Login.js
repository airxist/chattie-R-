import styled from "styled-components"
import {
  SwitchRoute,
  FormRow,
  Logo,
  Summitter
} from "../../components"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="d-md-flex align-items-center justify-content-center">
      <Logo />
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
padding: 36px 30px 94px;
height: 100vh;
background-color: white;
form {
  width: 100%;
  // height: 447px;
  margin-top: 104px;
}
@media screen and (min-width: 1024px) {
  padding: 64.5px 12px;
  max-width: 50%;
  max-height: 705px;
  form {
    max-width: 377px;
    margin-top: unset
  }
}
`

export default Login
