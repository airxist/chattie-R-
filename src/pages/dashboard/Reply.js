import Display from '../../components/Display'
import messages from '../../utils/messages'

const Reply = () => {
  return (
    <Display 
      reply={true}
      messages={messages}
    />
  )
}

export default Reply
