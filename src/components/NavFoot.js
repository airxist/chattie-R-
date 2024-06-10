import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import logoutIcon from '../assets/icons/logout.svg'

const NavFoot = () => {
  return (
    <NavFooter>
      <Profile show={true} />
      <button className='logout btn px-0 d-flex align-items-center mt-2'>
        <span className='icon d-flex align-items-center justify-content-center'>
            <img src={logoutIcon} alt='logout' />
        </span>
        Logout
      </button>
    </NavFooter>
  )
}

const NavFooter = styled.div`
padding: 20px 30px;
background-color: var(--chat-bg-purple);
height: 110px;
.logout {
  width: 100px;
  gap: 17px
}
.icon {
  width: 24px;
  height: 24px;
}
`

export default NavFoot
