import styled from "styled-components"
import { 
  Bars,
  SwitchRoute,
  FormRow,
  Logo,
  Summitter
} from "../../components"
import { Link, useNavigate } from "react-router-dom"


const Register = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="positon-relative">
      <Bars />
      <Logo />
      <div className="form-container d-flex align-items-center justify-content-center">
        <form className="border mx-auto" onSubmit={(e) => {
            e.preventDefault();
            navigate('/verify')
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
    max-width: 50%;
    height: 100vh;
    padding: 0;
    .form-container {
      height: inherit
    }
    form {
      max-width: 377px;
    }
  }
`

export default Register
