import Display from "../../components/Display"
import messages from "../../utils/messages"

const DMs = () => {
  return (
    <Display
      messages={messages}
      addSpace={true}
      switching={true}
      dashRouting={true}
    />
  )
}


export default DMs
