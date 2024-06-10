import styled from 'styled-components'
import { Back, Return } from '../../components'

const Profile = () => {
  return (
    <Wrapper>
        <Return 
            to="/dashboard"
            text="Profile"
        />
        <div className='details border'>

        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background: white;
height: 100vh;
.return {
    padding: 17.5px;
}
.details {
    min-height: 417px;
    padding: 0 30px;
}
@media screen and (min-width: 1024px) {

}
`

export default Profile
