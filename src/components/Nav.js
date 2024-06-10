import styled from 'styled-components'
import DashRoutes from './DashRoutes'
import Logo from './Logo'
import NavFoot from './NavFoot'
import Spaces from './Spaces'

const Nav = () => {
  return (
    <Wrapper className='d-flex flex-column justify-content-between'>
        <header className='hero'>
            <Logo route="true" />
        </header>
        <DashRoutes />
        <Spaces />
        <NavFoot />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
width: 280px;
height: 100vh;
background-color: white;
transform: translate(-100%);
position: absolute;
top: 0;
left: 0;
overflow: hidden;
transition: transform .3s;

&.activate {
    transform: translate(0);
}

.hero {
    height: 70px;
    background-color: var(--chat-bg-purple);
    padding: 30px;
}

.dash-routes {
    display: none;
}
@media screen and (min-width: 1024px) {
    position: sticky;
    top: 0;
    left: 0;
    // max-height: 705px; // to set he max height
    transform: translate(0%);

    .dash-routes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 197px;
        padding: 30px;
        list-style: none;
        gap: 15px;
    }
}
`

export default Nav
