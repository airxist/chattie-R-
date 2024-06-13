import styled from 'styled-components'

const Choice = ({
    btnText1,
    btnText2
}) => {
  return (
    <Wrapper className='border border-danger bg-light'>
      <button
        className='btn'
      >
        {btnText1}
      </button>
      {
        btnText2 && <button
            className='btn'
        >
            {btnText2}
        </button>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: sticky;
top: 70px;
left: 0;
`

export default Choice
