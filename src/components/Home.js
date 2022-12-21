import React, { Component } from 'react'
import './Home.scss'
import rover from './images/curiosity.png'
import earth from './images/earth.jpg'
import space from './images/space.gif'
import TextMotion from './TextMotion'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='homeWrapper'>
          {/* Le titre de la page disposée de façon à pouvoir appliquer différentes couleurs et fontes aux lettres de départ */}
          <div className='welcomeGrid'><h1 className='homeWelcome'>W<span>elcome</span> I<span>n</span> S<span>pace</span></h1></div>
          <div className='roverImg'><img src={rover} alt="Curiosity" /></div>
        </div>
        <div>
          <div className='homeWrapper2'>
            <div className='homeMid'>
              <img src={earth} alt="Earth" />
            </div>
            <div className='homeBottom'>
              <img src={space} alt="space" />
              {/* Le composent du texte animé du centre de la page */}
              <h1><TextMotion className='motion'/></h1>
            </div>
          </div>
        </div>
      </>
    )
  }
}
