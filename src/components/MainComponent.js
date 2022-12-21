import React, { Component } from 'react'
import './MainComponent.scss'
import planMars from './images/planMars.jpg'
import '../index.scss'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'


// const API_KEY = 'iMGgQ8VohqSVq492fY2R2WLW5zTR8ouYWfgPwKFE'


export default class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rover: 'Curiosity',
      camera: 'FHAZ',
      images: [],
      sol: ''
    }

    this.handleCamera = this.handleCamera.bind(this)
    this.handleEarthDate = this.handleEarthDate.bind(this)
    this.fetchRoverImage = this.fetchRoverImage.bind(this)
  }

  // Les deux fonctions pour les paramètres de recherche à inclure dans l'URL de la requête
  handleCamera(event) {
    this.setState({ camera: event.target.value })
  }
  handleEarthDate(event) {
    this.setState({ earthDate: event.target.value }); console.log(this.state.camera)
  }

  // La requête à l'API
  fetchRoverImage() {
    this.setState({ camera: this.state.camera, earthDate: this.state.earthDate })
    let camera = this.state.camera
    let earthDate = this.state.earthDate
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&camera=${camera}&api_key=iMGgQ8VohqSVq492fY2R2WLW5zTR8ouYWfgPwKFE`
    fetch(imageUrl)
      .then(response => response.json())
      .then(responseData => {
        // La déclaration de l'état du tableau d'images retourné
        this.setState({ images: responseData.photos })
        console.log(responseData.photos)
      })
      .catch((error) => {
        console.log('Fetching error:', error)
      })
  }

  // Fonction pour remettre à null les champs de recherche non-fonctionnelle pour le moment
  handleClearSearch = (event) => {
    this.camera.value = '';
    this.earthDate.value = '';
  }


  render() {



    return (

      <div className='mainContainer'>
        <div className='leftContainer'>
          <h1 className='redPlanet'>Red planet</h1>
          {/* La carte de mars qui se retourne pour donner accès à des informations au verso */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={planMars} alt="Avatar" style={{ height: "450px" }} />
              </div>
              <div class="flip-card-back">
                <h1>Mars</h1>
                <p>With a radius of 2,106 miles, Mars is the seventh largest planet in our solar system and about half the diameter of Earth.</p>
                <p>Mars rotates on its axis every 24.6 Earth hours, defining the length of a Martian day, which is called a sol, short for “solar day”.</p>
                <p>Mars is also known as the Red Planet. This is because Mars is covered in soil, rock, and dust made from iron oxide which gives the surface a red rusty colour.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='rightContainer'>
          <div>
            <div className='select-form'>
              {/* Le select donnant accès aux choix de caméras pour la requête à l'API */}
              <div className='inputCam'>
                <select onChange={this.handleCamera} id="camera" value={this.state.value}>
                  <option value="fhaz">Front Hazard Avoidance Camera</option>
                  <option value="rhaz">Rear Hazard Avoidance Camera</option>
                  <option value="mast">Mast Camera</option>
                  <option value="chemcam">Chemistry and Camera Complex</option>
                  <option value="mahli">Mars Hand Lens Imager</option>
                  <option value="mardi">Mars Descent Imager</option>
                  <option value="navcam">Navigation Camera</option>
                  <option value="pancam">Panoramic Camera</option>
                  <option value="minites">Miniature Thermal Emission Spectrometer</option>
                </select>
              </div>
              {/* Le input de la date pour la requête à l'API */}
              <div className='inputDate'>
                <input placeholder="Date: YYYY-MM-DD" type="text" onChange={this.handleEarthDate} value={this.state.value} />
              </div>
            </div>
            <GetImageButton onClick={this.fetchRoverImage} />
            <div class="buttons btnMain">
              {/* Deuxième bouton blob, pas encore fonctionnel! */}
              <button class="blob-btn" onClick={this.handleClearSearch}>
                Reset
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
              <svg>
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className='image-results'>
            {/* L'appel du composent pour l'affichage des images si il y en a de retournées par l'appel à  l'API */}
            <ImageDisplay images={this.state.images} />
          </div>
        </div>
      </div>
    )
  }
}