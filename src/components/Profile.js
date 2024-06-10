import styled from "styled-components"

const Profile = ({
    show
}) => {
  return (
    <Wrapper className="d-flex align-items-center">
      <div className="rounded-circle d-flex align-items-center justify-content-center m-0">
        <p className="text-light m-0">
            D
        </p>
      </div>
      <h5 className={`m-0 ${show ? 'd-block' : 'd-none d-md-block'}`}>Daniel Kosoko</h5>
    </Wrapper>
  )
}

const Wrapper = styled.div`
gap: 15px;
div {
    background-color: var(--primary-purple);
    width: 29px;
    height: 29px;
}
`

export default Profile
