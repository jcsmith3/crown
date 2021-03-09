import React from 'react'
import { CollectionPreview } from '../..'
import DATA from './shopData'

import './ShopPage.sass'

export default class ShopPage extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      collection: DATA
    }
  }

  render() {
    const { collection } = this.state
    return (
      <section className='shop-page'>
      {
        collection.map( item => (
          <CollectionPreview key={item.id} {...item} />
        ))
      }
      </section>
    )
  }
}
