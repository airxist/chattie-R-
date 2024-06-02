import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import iconChat from '../assets/icons/icon-back.svg'
import Icon from './Icon'
import dashLinks from '../links/dashboardLinks'

const Nav = () => {
  return (
    <Wrapper>
        <header className='hero border'>
            <Logo route="true" />
        </header>
        <ul className='d-none d-md-block border m-0'>
            {dashLinks.map(link => {
                    return <Icon
                        key={link.id}
                        {...link}
                    />
            })}
        </ul>
        <div className='spaces border'>
            <header>
                <p>Spaces</p>
                <button className='btn'>
                    Add New
                </button>
            </header>
        </div>
        <footer>
            <button className='logout'>
                <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.75H1C0.801088 1.75 0.610323 1.67098 0.46967 1.53033C0.329018 1.38968 0.25 1.19891 0.25 1C0.25 0.801088 0.329018 0.610323 0.46967 0.46967C0.610323 0.329018 0.801088 0.25 1 0.25H12C12.1989 0.25 12.3897 0.329018 12.5303 0.46967C12.671 0.610323 12.75 0.801088 12.75 1C12.75 1.19891 12.671 1.38968 12.5303 1.53033C12.3897 1.67098 12.1989 1.75 12 1.75Z" fill="#393939"/>
                </svg>
                Logout
            </button>
        </footer>
    </Wrapper>
  )
}

const Wrapper = styled.nav`

`

export default Nav
