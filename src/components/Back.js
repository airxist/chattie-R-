import { Link } from "react-router-dom"
import back from '../assets/icons/icon-back.svg'
import styled from "styled-components"

const Back = ({
    to,
    text
}) => {
  return (
    <Wrapper className="back d-flex align-items-center">
      <Link to={to} className="back-link">
        <img src={back} alt="back" />
      </Link>
      <h4 className="back-text m-0">{text}</h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
a {
  margin-right: 15px;
}
`

export default Back
