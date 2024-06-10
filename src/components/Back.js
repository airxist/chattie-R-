import { Link } from "react-router-dom"
import back from '../assets/icons/icon-back.svg'

const Back = ({
    to,
    text
}) => {
  return (
    <Link to={to} className="back-icon">
      <img src={back} alt="back" />
      {text}
    </Link>
  )
}

export default Back
