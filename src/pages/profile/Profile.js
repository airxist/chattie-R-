import styled from 'styled-components'
import { Return } from '../../components'
import ProfileImg from '../../components/ProfileImg'
import Bios from '../../components/Bios'
import ProfileSpaces from '../../components/ProfileSpaces'

const Profile = () => {
  return (
    <Wrapper>
        <Return 
            to="/dashboard"
            text="Profile"
        />
        <div className='details mt-3'>
          <div className='personal d-md-flex '>
            <ProfileImg />
            <Bios 
              online="online"
              username="Titilope Adewumi"
              email="titilopeade@gmail.com"
              role="Admin"
            />
          </div>
          <ProfileSpaces />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background: white;
min-height: 100vh;
.return {
    padding: 17.5px;
    position: sticky;
    top: 0;
    left: 0;
}
.details {
    min-height: 417px;
    padding: 0 30px;
}
.personal {

}
@media screen and (min-width: 1024px) {
.return {
  padding: 17.5px 235px;
}
.details {
  padding: 0 235px;
}
}
`

export default Profile
