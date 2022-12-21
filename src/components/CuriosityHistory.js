import React from 'react'
import './CuriosityHistory.scss'

function CuriosityHistory() {

  return (
    //Couche du titre 3D
    <div className='curiosityWrap'>
      <div class="stage">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
      <div className='underTitleRow'>
        {/* Texte à l'intérieur du cadre aux bordures croches avec mouvements  */}
        <div className='curiosityFirstDesc'>
          <h2>What is Curiosity (MSL)?</h2>
          <p>NASA's Curiosity is the largest and most advanced rover ever sent to Mars. The car-sized rover is part of NASA's Mars Science Laboratory (MSL). Curiosity's ongoing mission is to study the ancient habitability and the potential for life on Mars.</p>
          <ul>
            <li>The rover began its first drive on Mars Aug. 29, 2012</li>
            <li>The rover is about as tall as a basketball player and uses a 7-foot (2-meter) arm to place tools close to rocks for study.</li>
          </ul>
        </div>
        {/* Model 3D du rover Curiosity */}
        <div className='roverModel'>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2398"
            title='Curiosity Rover'
            width="700px"
            height="700px"
            style={{
              padding: "var(--s)",
              border: "calc(2*var(--s)) solid #0000",
              outline: "1px solid #000",
              outlineoffset: "calc(-1*var(--s))",
              background: "conic-gradient(from 90deg at 1px 1px,#0000 25%,#fff 0)",
            }}
          />
        </div>
        {/* Table à la droite du rover */}
        <div className='datesTable'>
          <table>
            <tr>
              <th colSpan="2">Key Dates</th>
            </tr>
            <tbody>
              <tr>
                <td><h3>Nov. 26, 2011</h3></td>
                <td>Launch</td>
              </tr>
              <tr>
                <td><h3>Aug. 6, 2012</h3></td>
                <td>Mars Landing</td>
              </tr>
              <tr>
                <td><h3>Aug. 29, 2012​</h3></td>
                <td>First drive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class='containerBlocks'>
       
      </div>
    </div>
  )
}

export default CuriosityHistory