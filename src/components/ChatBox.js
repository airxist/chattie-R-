import styled from "styled-components"
import carbon from '../assets/icons/icon-carbon.svg'
import { Link } from "react-router-dom"


const ChatBox = ({
    profileImage,
    name,
    date,
    message,
    replies,
    user,
    hide
}) => {
  return (
    <Wrapper className={`d-flex align-items-start ${user ? "user rounded-2" : null}`}>
      
      {!hide && <div className="profileImage rounded-circle d-flex align-items-center justify-content-center">
        <p className="text-purple m-0">{name.substring(0, 1)}</p>
      </div>}

      <div className="profile ms-3">
        <div className="detail d-flex align-items-center">
          {!hide && <h4 className="name m-0">{name}</h4>}
          <p className="date m-0 mx-3">{date}</p>
          <span className="carbon badge">
              <img src={carbon} alt="carbon" />
          </span>
        </div>
        <p className="msg mt-3">{message}</p>
        {replies && <Link to="reply" className="replies text-purple">Daniel Adewumin and 22 others</Link>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 10px;
  .profileImage {
    width: 29px;
    height: 29px;
    background-color: var(--chat-bg-purple);
  }
  .profile {
    width: calc(100% - 29px);
  }
`

export default ChatBox
