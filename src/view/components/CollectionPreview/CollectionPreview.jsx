import React from 'react'
import { CollectionItem } from '../..'

import './CollectionPreview.sass'

const CollectionPreview = ( props )=> (

  <section className="collection-preview">
    <div className="preview">
      <h1 className="title">{props.title}</h1>
      {
        props.items
        .filter(( item, i) => i < 4)
        .map( item => (
          <CollectionItem key={item.id} {...item} />
        ))
      }
    </div>
  </section>
)

export default CollectionPreview
