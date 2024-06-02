import { Link } from "react-router-dom"
import styled from "styled-components"


const Icon = ({
    vector,
    text,
    linkAddress
}) => {
  return (
    <Link to={linkAddress} className="flex align-items-center justify-content-between">
      {vector}
      <p>{text}</p>
    </Link>
  )
}

export default Icon
