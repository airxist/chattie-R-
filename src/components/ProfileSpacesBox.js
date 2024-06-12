import React from 'react'
import styled from 'styled-components'

const ProfileSpacesBox = ({
    name,
    description
}) => {
  return (
    <Wrapper className='space-box border mb-3 d-flex align-items-start'>
      <span className='space-icon pt-1'>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8C3.44667 8 2.92667 7.89493 2.44 7.6848C1.95333 7.47466 1.53 7.18973 1.17 6.83C0.81 6.47026 0.525067 6.04693 0.3152 5.56C0.105334 5.07307 0.000267173 4.55307 5.06329e-07 4C-0.00026616 3.44693 0.104801 2.92693 0.3152 2.44C0.5256 1.95307 0.810534 1.52973 1.17 1.17C1.52947 0.810266 1.9528 0.525333 2.44 0.3152C2.9272 0.105067 3.4472 0 4 0C4.5528 0 5.0728 0.105067 5.56 0.3152C6.0472 0.525333 6.47053 0.810266 6.83 1.17C7.18947 1.52973 7.47453 1.95307 7.6852 2.44C7.89587 2.92693 8.0008 3.44693 8 4C7.9992 4.55307 7.89413 5.07307 7.6848 5.56C7.47547 6.04693 7.19053 6.47026 6.83 6.83C6.46947 7.18973 6.04613 7.4748 5.56 7.6852C5.07387 7.8956 4.55387 8.00053 4 8ZM4 7.2C4.89333 7.2 5.65 6.89 6.27 6.27C6.89 5.65 7.2 4.89333 7.2 4C7.2 3.10667 6.89 2.35 6.27 1.73C5.65 1.11 4.89333 0.8 4 0.8C3.10667 0.8 2.35 1.11 1.73 1.73C1.11 2.35 0.8 3.10667 0.8 4C0.8 4.89333 1.11 5.65 1.73 6.27C2.35 6.89 3.10667 7.2 4 7.2Z" fill="#393939"/>
        </svg>
      </span>
      <article className='space-detail ms-2'>
        <header className='space-hero d-flex align-items-center justify-content-between'>
            <h6 className='space-name m-0'>{name}</h6>
            <div className='action'>
                <button className='btn'>
                    Edit
                </button>
                <button className='btn text-danger'>
                    Remove
                </button>
            </div>
        </header>
        <div className='described'>
            <p className='described-text m-0'>{description ? `${description}` : "No description at this time"}</p>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.space-hero {
    width: 239px;
}
`

export default ProfileSpacesBox
