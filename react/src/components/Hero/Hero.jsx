import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Hero.scss'

function Hero() {
    return (
        <div className="container">
            <div className="cards">
                <div>
                    <h2>Instrutores de planta</h2>
                    <p></p>
                </div>
                <div>
                    <h2>Instructores contratistas</h2>
                    <p></p>
                </div>
                <div>
                    <h2>Ambientes sede Yamboró</h2>
                    <p></p>
                </div>
                <div>
                    <h2>Ambientes disponibles</h2>
                    <p></p>
                </div>
            </div>     
        </div>
    )
}

export default Hero
