import { Outlet } from "react-router-dom"
import styled from "styled-components"
import {
  Nav,
  Modal
} from '../components';

const Dashboard = () => {
  return (
    <Wrapper className="position-relative d-md-flex align-items-center">
      <Nav />
      <Modal />
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 705px;
  background: orange;
  // overflow: hidden;
`


export default Dashboard
