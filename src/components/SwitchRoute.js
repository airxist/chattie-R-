import { Link } from "react-router-dom"

const SwitchRoute
 = ({
    text1, text1Action, text2, text2Action
}) => {
  return (
    <div className="choice">
        <Link to={text1Action}
            className="btn"
        >
            {text1}
        </Link>
        <Link to={text2Action}
            className="btn"
        >
            {text2}
        </Link>
    </div>
  )
}

export default SwitchRoute

