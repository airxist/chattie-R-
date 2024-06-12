import React from 'react'
import styled from 'styled-components'

const Bars = () => {
  return (
    <Wrapper className="bars border position-absolute d-flex align-items-end justify-content-between">
      <div className='bar bar-1'></div>
      <div className='bar bar-2'></div>
      <div className='bar bar-3'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
max-width: 375px;
height: 214px;
bottom: 0;
left: 0;
z-index: -1;
.bar {
    width: calc(100% / 3);
    max-width: 75px;
    background-color: var(--chat-bg-purple);
}
.bar-1 {
    height: 214px
}
.bar-2 {
    height: 143px
}
.bar-3 {
    height: 86px
}
`

export default Bars
