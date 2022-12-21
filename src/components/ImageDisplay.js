import React, { Component } from 'react'
import './ImageDisplay.scss'

export default class ImageDisplay extends Component {
  render () {
    return (
      <div className='image-results'>
        {/* Le mapping du tableau retourné par l'API, ainsi que la disposition des éléments à être retournés pour la mise ene page */}
        {this.props.images.map((image) =>
          <div className='image-map' key={image.id}>
            <ul className='image-details'>
              <img src={image.img_src} alt='' />
              <h5>Camera name: {image.camera.name}<br/>date: {image.earth_date}</h5>
            </ul>
          </div>
      )}
      </div>
    )
  }
}