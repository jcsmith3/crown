import React from 'react'

import './MenuItem.sass'

const MenuItem = props => {
  return (
    <div className='menu-item'>
      <div
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
        className="background" />
        <div className='content'>
          <h1 className='title'>{ props.title }</h1>
          <span className='subtitle'>Shop now</span>
        </div>
    </div>
  )
}

export default MenuItem
