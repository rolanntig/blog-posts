import React from 'react'

const userCard = (props) => {
  return (
      <div className='ui card'>
        <div className='content'>
          <div className='header'>Alex</div>
              <div className='description'>{props.children}</div>
        </div>
        <div className='ui bottom button'>
          <i className='add icon'></i>
          Add Friend
        </div>
      
    </div>
  )
}

export default userCard
