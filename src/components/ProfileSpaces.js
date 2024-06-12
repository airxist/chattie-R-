import React from 'react'
import styled from 'styled-components'
import ProfileSpacesBox from './ProfileSpacesBox'
import SpaceBar from './SpaceBar'

const profileData = [
    {
        id: 0,
        name: "The Portals",
        description: "In ThePortals, we discuss matters arising in tech space. Join us for a tooth-aching, brain-bursting discussion"
    },
    {
        id: 1,
        name: "NielBs",
    },
    {
        id: 0,
        name: "The Portals",
        description: "In ThePortals, we discuss matters arising in tech space. Join us for a tooth-aching, brain-bursting discussion"
    },
    {
        id: 1,
        name: "NielBs",
    },
    {
        id: 0,
        name: "The Portals",
        description: "In ThePortals, we discuss matters arising in tech space. Join us for a tooth-aching, brain-bursting discussion"
    },
    {
        id: 1,
        name: "NielBs",
    },
]

const ProfileSpaces = () => {
  return (
    <Wrapper className='border-top border-2 pt-2'>
      <SpaceBar />
      <div className='spaces'>
        {
            profileData.map(data => {
                return <ProfileSpacesBox
                    key={data.id}
                    {...data}
                />
            })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.space-bar {
    max-width: 217px;
}
`

export default ProfileSpaces
