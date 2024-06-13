import styled from "styled-components"
import Return from "./Return"
import TitleBar from "./TitleBar"
import Send from "./Send"
import DashRoutes from "./DashRoutes"
import Choice from "./Choice"
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
    <Wrapper className="dash-feature position-relative">
      
      {reply ? <Return to="/dashboard" text="Reply to kosoko"/> : <TitleBar space="My team"/>
      }

      <div className="boxing">
        <div className="display border border-primary">
                {description && <p className='m-0'>{description}</p>}
                {
                    switching && <Choice
                        btnText1="Chats"
                        btnText2="Important"
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
      </div>
      
      <div className="send-dash-routes mx-auto position-sticky">
        <Send />
        {dashRouting && <DashRoutes media={true} />}
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
min-height: 100vh;
.boxing {
  padding: 30px 15px;
}

.send-dash-routes {
  width: 100%;
  padding: 0 15px;
  min-height: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}

.dash-routes {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: solid 2px red;
}

@media screen and (min-width: 1024px) {
  .boxing {
    padding: 30px 95px;
  }

  .send-dash-routes {
    padding: 0;
    width: 85%;
  }
  
  .dash-routes {
    display: none;
    background: yellow;
  }
}
`

export default Display
