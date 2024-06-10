import styled from 'styled-components'
import logo from '../assets/icons/icon-logo.svg'

const Logo = ({
  route
}) => {
  return (
    <Wrapper className={`d-flex align-items-center justify-content-between ${route ? "d-block" : "d-lg-none"}`}>
      <img src={logo} alt='' />
      <h3 className='m-0'>Chattie</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 120px;
`

export default Logo
