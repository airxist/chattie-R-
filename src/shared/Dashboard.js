import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Nav from "../components/Nav"

const Dashboard = () => {
  return (
    <Wrapper>
        <Nav />
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`

`


export default Dashboard
