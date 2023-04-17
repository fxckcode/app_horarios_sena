import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Base from '../Layout/Base'
import '../scss/HomePage.scss'

function HomePage() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getHome = async () => {
            const apiHome = await axios.get('http://127.0.0.1:8000/api/home')
            setData(apiHome.data.data)
            setUser(apiHome.data.user)
            console.log(apiHome.data.data)
        }
        getHome();
    }, [])
    return (
        <Base user={user}>
            <div className="cards">
                <div>
                    <h2>Instrutores de planta</h2>
                    <p>{data.nombre_amb}</p>
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
        </Base>
    )
}

export default HomePage