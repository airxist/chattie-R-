import styled from 'styled-components'
import { Return } from '../../components'
import ProfileImg from '../../components/ProfileImg'
import Bios from '../../components/Bios'

const Profile = () => {
  return (
    <Wrapper>
        <Return 
            to="/dashboard"
            text="Profile"
        />
        <div className='details border mt-3'>
          <div className='personal'>
            <ProfileImg />
            <Bios 
              online="offline"
              username="Titilope Adewumi"
              email="titilopeade@gmail.com"
              role="Admin"
            />
          </div>
          <div className='spaces'>

          </div>
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
.personal {

}
@media screen and (min-width: 1024px) {

}
`

export default Profile
