import { NavLink } from "react-router-dom"
import styled from "styled-components"


const Icon = ({
    vector,
    text,
    linkAddress,
    smMedia
}) => {
  return (
    <NavLink to={linkAddress}
      className={({isActive}) => (isActive ? "fit active" : "fit")}
    >
      <Wrapper 
        className={smMedia ? 
        `text-center media-small ${text === "About" ? 'd-none' : null}` : 
        "link-con d-flex align-items-center justify-content-start"}
      >
        {vector}
        <p className={
          smMedia ?
          "m-0" :
          "m-0 ms-2"
        }>{text}</p>
      </Wrapper>
    </NavLink>
  )
}

const Wrapper = styled.div`
// width: fit-content;
svg {
  width: 20px;
  height: 20px;
}
`

export default Icon
