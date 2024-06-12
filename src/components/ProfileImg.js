import styled from 'styled-components'
import avatar from '../assets/images/avatar.jpg'

const ProfileImg = () => {
  return (
    <Wrapper className='image rounded-circle border border-danger'>
      <img src={avatar} alt='avatar' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 90px;
height: 90px;

img {
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 1024px) {

}
`

export default ProfileImg
