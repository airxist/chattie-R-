import styled from "styled-components"

const Spaces = () => {
  return (
    <Wrapper>
        <div className='d-flex align-items-center justify-content-between border border-danger'>
            <p className='m-0'>Spaces</p>
            <button className='btn btn-secondary btn-sm'>
                + Add New
            </button>
        </div>
        
    </Wrapper>
  )
}


const Wrapper = styled.div`
width: 100%;
height: calc(100vh - (70px + 110px ));
padding: 30px;
// overflow-y: scroll;
@media screen and (min-width: 1024px) {
    height: calc(100vh - (70px + 110px + 197px));
    border-top: solid 1px var(--primary-purple)
}
`

export default Spaces
