import styled from "styled-components"

const Summitter = ({text}) => {
  return (
    <Wrapper
        className="text-center btn w-100 text-light"
    >
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.button`
    background-color: var(--primary-purple);
    margin-top: 20px;
`

export default Summitter
