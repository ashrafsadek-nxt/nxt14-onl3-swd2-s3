import React from 'react'

const Profile = ({userData}) => {
  return (
    <div>
        <h1>profile</h1>

        <h3>hello ! {userData.userName}</h3>
      
    </div>
  )
}

export default Profile
