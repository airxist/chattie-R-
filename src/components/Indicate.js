import React from 'react'
import styled from 'styled-components'

const Indicate = ({pin}) => {
  return (
    <Wrapper className='rounded-2'>
      <p>{pin}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 32px;
height: 32px;
background-color: var(--chat-bg-purple);
border: solid black 1px;
`

export default Indicate
