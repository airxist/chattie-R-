import React from 'react'
import styled from 'styled-components'

const Modal = ({text}) => {
    // there will be a text coming in for deletion or updating
  return (
    <Wrapper className='hide d-flex align-items-center justify-content-center position-absolute'>
      <div className='modal-board rounded-3'>
        <p className='modal-text m-0'>
            Hi Everyone, I am alone here  Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here Hi Everyone, I am alone here 
        </p>
        <div className='modal-action'>
            <button
                className='btn bg-purple text-light'
            >
                Update Message
            </button>
            <button
                className='btn text-danger'
            >
                Delete Message
            </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
top: 0;
left: 0;
height: 100vh;
width: 100%;
background-color: var(--modal);
z-index: 5;
padding: 15px;
&.hide {
    opacity: 0;
    z-index: -2;
}
.modal-board {
    width: 375px;
    min-height: fit-content;
    background-color: white;
    padding: 30px 20px;
}
.modal-action {
    margin-top: 10px;
}
`

export default Modal
