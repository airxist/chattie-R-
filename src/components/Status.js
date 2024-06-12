import React from 'react'
import styled from 'styled-components'

const Status = ({
    type
}) => {
  return (
    <Wrapper className={`stats ${type} d-flex align-items-center`}>
      <div className='icon d-flex align-items-center justify-content-center'>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10C5.44667 10 4.92667 9.89493 4.44 9.6848C3.95333 9.47466 3.53 9.18973 3.17 8.83C2.81 8.47026 2.52507 8.04693 2.3152 7.56C2.10533 7.07307 2.00027 6.55307 2 6C1.99973 5.44693 2.1048 4.92693 2.3152 4.44C2.5256 3.95307 2.81053 3.52973 3.17 3.17C3.52947 2.81027 3.9528 2.52533 4.44 2.3152C4.9272 2.10507 5.4472 2 6 2C6.5528 2 7.0728 2.10507 7.56 2.3152C8.0472 2.52533 8.47053 2.81027 8.83 3.17C9.18947 3.52973 9.47453 3.95307 9.6852 4.44C9.89587 4.92693 10.0008 5.44693 10 6C9.9992 6.55307 9.89413 7.07307 9.6848 7.56C9.47547 8.04693 9.19053 8.47026 8.83 8.83C8.46947 9.18973 8.04613 9.4748 7.56 9.6852C7.07387 9.8956 6.55387 10.0005 6 10ZM6 9.2C6.89333 9.2 7.65 8.89 8.27 8.27C8.89 7.65 9.2 6.89333 9.2 6C9.2 5.10667 8.89 4.35 8.27 3.73C7.65 3.11 6.89333 2.8 6 2.8C5.10667 2.8 4.35 3.11 3.73 3.73C3.11 4.35 2.8 5.10667 2.8 6C2.8 6.89333 3.11 7.65 3.73 8.27C4.35 8.89 5.10667 9.2 6 9.2Z" fill="#B934F2"/>
            </svg>
      </div>
        <p className='stats-text m-0'>{type}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.icon {
    width: 12px;
    height: 12px;
}
&.online {
    .icon svg path {
        stroke: var(--primary-purple)
    }
}
&.offline {
    .icon svg path {
        stroke: var(--primary)
    }
}
`

export default Status
