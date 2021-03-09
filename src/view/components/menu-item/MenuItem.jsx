import React from 'react'
import { withRouter } from 'react-router-dom'

import './MenuItem.sass'

const MenuItem = ({ match, history, ...props })=> (
    <div
      onClick={() => history.push(`/shop/${props.title}`)}
      className='menu-item'>
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

export default withRouter( MenuItem )
