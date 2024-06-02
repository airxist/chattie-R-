import { Link } from "react-router-dom"

const Sign = () => {
  return (
    <div>
        <Link to='/login'
            className="btn"
        >
            Login
        </Link>
        <Link to='/'
            className="btn"
        >
            Register
        </Link>
    </div>
  )
}

export default Sign
