import { Link } from "react-router-dom"
import styled from "styled-components"


const FormRow = ({
    link,
    linkAddress,
    label,
    type,
    name,
    value
}) => {
  return (
    <Wrapper>
      <div className="d-flex align-items-center justify-content-between">
        <label htmlFor={name} className="d-block">{label}</label>
        {
          link && <Link to={linkAddress}>{link}</Link>
        }
      </div>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        className="px-2 rounded-2"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 20px;
    input {
        width: 100%;
        // max-width: 315px;
        height: 45px;
        background-color: var(--border-purple);
    }
`

export default FormRow
