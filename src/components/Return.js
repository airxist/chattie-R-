import styled from 'styled-components'
import Back from './Back'

const Return = ({
  to,
  text
}) => {
    return (
        <Wrapper className='return'>
          <Back
            to={to}
            text={text}
          />
        </Wrapper>
      )
}

const Wrapper = styled.div`
padding: 15px;
height: 70px;
background-color: var(--chat-bg-purple);
.back-icon {
  border: solid 3px black;
}
@media screen and (min-width: 1024px) {
  padding: 15px 95px;
}
`

export default Return
