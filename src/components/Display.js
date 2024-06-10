import styled from "styled-components"
import Return from "./Return"
import TitleBar from "./TitleBar"
import Send from "./Send"
import DashRoutes from "./DashRoutes"
import ChooseRoute from "./SwitchRoute"
import ChatBox from "./ChatBox"

const Display = ({
    reply,
    messages,
    dashRouting,
    description,
    switching,
    hide
}) => {
  return (
    <Wrapper className="dash-feature">
      {reply ? <Return to="/dashboard" text="Reply to kosoko" /> : <TitleBar space="My team" />}
      <div className={`${dashRouting ? "added" : "boxing"}`}>
        <div className="box">
            <div
                className="display"
            >
                {description && <p className='m-0'>{description}</p>}
                {
                    switching && <ChooseRoute
                        text1="Chats"
                        // text1Action="/"
                        text2="Important"
                        // text2Action="/"
                    />
                }
                <div className="messages">
                {messages.map(message => {
                    return <ChatBox
                    key={message.id}
                    {...message}
                    hide={hide}
                    />
                })}
                </div>
            </div>
            <Send />
        </div>
      </div>
      {dashRouting && <DashRoutes media={true} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .boxing {
    height: calc(100vh - 70px);
    padding: 15px;
}
.added {
    height: calc(100vh - 142px);
    padding: 15px;
}

  .box {
    height: 100%;
  }

  .display {
    overflow-y: scroll;
    height: 85%;
  }

  .dash-routes {
    background: yellow;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  @media screen and (min-width: 1024px) {
    .boxing,
    .added {
      padding: 30px 95px;
    }

    .added {
        height: calc(100vh - 70px);
    }

    .box {
      height: 85%;
    //   background: yellow;
    }
    .display {
      height: 95%;
      background: yellow;
    }

    .dash-routes {
        display: none;
      }
  }
`

export default Display
