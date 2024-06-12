import styled from "styled-components"
import Status from "./Status"


const Bios = ({
    online,
    username,
    email,
    role
}) => {
  return (
    <Wrapper className="ms-md-5">
        <Status type={online}/>
      <h3 className="username">{username}</h3>
      <p className="email m-0">{email}</p>
      <i className="role">{role}</i>
      <div className='action'>
            <button
                className='btn text-purple ps-0'
            >
                Edit Profile
            </button>
            <button
                className='btn text-danger'
            >
                Reset Password
            </button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default Bios
