import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

function UserHeading() {
  return (
    <div className="headingSection">
        <p className="back">
          <Link to='/'>
          <Icon icon="ic:round-keyboard-backspace" />
          <span className="backText">Back to Users</span>
          </Link>
        </p>
        <div className="pageTitle">
          <p className="contentHeading">User Details</p>
          <div className="userSettings">
            <button className="blacklistBtn"><span>BLACKLIST USER</span></button>
            <button className="activateBtn"><span>ACTIVATE USER</span></button>
          </div>
        </div>
      </div>
  )
}

export default UserHeading