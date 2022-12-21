import React, { Component } from 'react'
import Swal from 'sweetalert2'
import '../App.scss'

export default class SweetAlerts extends Component {
  render() {

    const popUpMessage = () => {
        Swal.fire({
            title: 'Project Informations',
            color: '#fff',
            icon: 'info',
            iconColor: '#fff',
            width: 600,
            text: 'This project is using 2 different queries for pictures, medias and diverse informations from 2 Nasa\'s APIs. The first one is used to show the daily picture published by the NASA and its description. The second one, i managed to build a dynamic querie with inputs with it. That way, the user can choose the date and the camera from the Curiosity rover which is actively exploring and gatherig datas on Mars.',
            confirmButtonText: 'LET\'S GO!',
            confirmButtonColor: 'var(--secondary)',
            background: 'var(--primary)',
            footer: '<a href="/" style="font-size:2rem; font-familly: Typewriter; color:#fff">Enjoy your visit!</a>'
        })
    }


    return (
      <div>
        <button className='buttonNav' onClick={popUpMessage}>Project Informations</button>
      </div>
    )
  }
}
