import Display from "../../components/Display"
import messages from "../../utils/messages"

const Anonymous = () => {
  return (
    <Display 
      messages={messages}
      hide={true}
      dashRouting={true}
      switching={true}
    />
  )
}


export default Anonymous
