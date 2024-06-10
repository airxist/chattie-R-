import { Outlet } from 'react-router-dom'
import { TitleBar, DashRoutes } from '../components'
import styled from 'styled-components'

const Inter = () => {
  return (
    <Wrapper>
      <TitleBar space="My taem" />
      <Outlet />
      <DashRoutes media={true} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
.dash-routes {
  background: white;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.nav-foot {
  height: 72px;
  background: yellow
}
@media screen and (min-width: 1024px) {
  width: calc(100% - 280px);
  .dash-routes {
    display: none;
  }
}
`

export default Inter
