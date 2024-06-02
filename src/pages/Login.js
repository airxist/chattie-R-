import styled from "styled-components"
import { FormRow, Logo, Sign, Summitter } from "../components"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <Wrapper>
      <Logo />
      <form className="border mx-auto">
        <Sign />
        {/* single form row */}
        <FormRow
          label="Email Address"
          type="email"
          name="email"
          value="eg: johndoe@gmail.com"
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
padding: 36px 30px 94px 30px;
form {
  width: 100%;
  // height: 447px;
  margin-top: 104px;
}
@media screen and (min-width: 1024px) {
  padding: 64.5px 12px;
  max-width: 50%;
  form {
    max-width: 377px;
    margin-top: unset
  }
}
`

export default Login
