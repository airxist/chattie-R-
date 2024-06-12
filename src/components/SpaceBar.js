import styled from 'styled-components'

const SpaceBar = ({user}) => {
  return (
    <Wrapper className='space-bar d-flex align-items-center justify-content-between'>
        <p className='m-0'>Spaces</p>
        <button className='btn btn-secondary btn-sm'>
            + Add New
        </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default SpaceBar
