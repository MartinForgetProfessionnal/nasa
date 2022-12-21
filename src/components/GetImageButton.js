import React, { Component } from 'react'
import './MainComponent.scss'

export default class GetImageButton extends Component {
    render() {
        return (
            //Un des deux boutons blob, celui de la fonction qui fait l'appel à l'API pour l'affichage des photos
            <div class="buttons btnMain">
                <button class="blob-btn" onClick={this.props.onClick}>
                    Submit
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
        )
    }
}