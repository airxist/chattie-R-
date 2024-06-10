import styled from "styled-components"
import Bg from "../components/Bg"
import { Outlet } from "react-router-dom"
import { useGlobalContext } from "../context"
import Alert from "../components/Alert"


const Authentication = () => {
  const { authImg } = useGlobalContext();
  return (
    <Wrapper className="d-md-flex align-items-center justify-content-between position-relative">
        <Outlet />
        <Alert />
        {authImg && <Bg />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  // background: red;
  min-height: 100vh;
  // max-height: 705px;
`

export default Authentication
