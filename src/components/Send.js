import styled from 'styled-components';
import send from '../assets/icons/icon-send.svg';
import people from '../assets/icons/icon-dms.svg';

const Send = () => {
  return (
    <Wrapper className='rounded-2 position-relative'>
      <input
        type='text'
        name='message'
        id='message'
        placeholder='Any Programme today?'
      />
      <button
        className='send-btn d-inline-flex align-items-center justify-content-center'
      >
        <img src={send} alt='send' />
      </button>
      <button
        className='people-btn position-absolute rounded-3'
      >
        <img src={people} alt='people' />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
border: solid 2px var(--primary-purple);
background-color: white;
padding: 12px 10px;
height: 48px;
margin: 39px 0 20px;
#message {
    width: calc(100% - 24px);
    border:none;
    outline: none;
}
.send-btn {
    width: 24px;
    height: 24px;
    border: none;
    background: none;
}
.people-btn {
  right: 0;
  top: -57px;
  width: 50px;
  height: 50px;
  border-color: var(--primary-purple);
  background-color: var(--chat-bg-purple)
}
`

export default Send
