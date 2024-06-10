import styled from "styled-components"
import { 
  SwitchRoute,
  FormRow,
  Logo,
  Summitter
} from "../../components"
import { Link, useNavigate } from "react-router-dom"


const Register = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="border">
      <Logo />
      <form className="border mx-auto" onSubmit={(e) => {
        e.preventDefault();
        navigate('/verify-email')
      }}>
        <SwitchRoute
          text1="Login"
          text1Action="/login"
          text2="Register"
          text2Action="/"
        />
        {/* single form row */}
        <FormRow
          label="Full Name"
          type="text"
          name="name"
          value="Daniel"
        />
        {/* single form row */}
        <FormRow
          label="Email Address"
          type="email"
          name="email"
          value="johndoe@gmail.com"
        />
        {/* single form row */}
        <FormRow
          label="Password"
          type="password"
          name="password"
          value="jsoe"
        />
        {/* single form row */}
        <FormRow
          label="Confirm Password"
          type="password"
          name="password"
          value="jsoe"
        />
        {/* submit button */}
        <Summitter 
          text="Register"
        />
        <p className="m-0 mt-2">
          Have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 36px 30px 94px;
  background-color: white;
  form {
    width: 100%;
    // height: 447px;
    margin-top: 28px;
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

export default Register
