import styled from "styled-components"
import Bg from "../components/Bg"
import { Outlet } from "react-router-dom"
import { useGlobalContext } from "../context"


const Authentication = () => {
  const { authImg } = useGlobalContext();
  return (
    <Wrapper className="d-flex align-items-center justify-content-between">
        <Outlet />
        {
          authImg && <Bg />
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  // background: red;
`

export default Authentication
