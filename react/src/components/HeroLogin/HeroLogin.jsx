import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import './HeroLogin.scss'

function HeroLogin() {
    // const [identificacion, setIdentificacion] = useState('');
    // const [password, setPassword] = useState('');

    //function handleSubmit(event) {
    //     event.preventDefault();

    //     fetch('http://127.0.0.1:8000/api/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify({ identificacion, password })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.message == 'invalid login') {
    //                 console.error(data.message)
    //             } else {
    //                 localStorage.setItem('token', data.token);
    //                 window.location.href = '/home';
    //             }
    //         })
    //         .catch(error => console.error(error));
    // }
    
    function handleSubmit(event) {
        event.preventDefault();
        window.location.href = "/home"
    }

    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div className="hero">
            <div className="card">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="identificacion">Número de documento</label>
                    <div className='login'>
                        <FontAwesomeIcon icon={faUser} />
                        {/* <input type="text" name="identificacion" id="identificacion" placeholder='Número de documento' value={identificacion} onChange={e => setIdentificacion(e.target.value)}/> */}
                        <input type="text" name="identificacion" id="identificacion" placeholder='Número de documento'/>
                    </div>
                    <label htmlFor="password">Contraseña</label>
                    <div className='login'>
                        <FontAwesomeIcon icon={faLock}/>
                        {/* <input type={showPassword ? "text": "password"} name="password" id="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)}/> */}
                        <input type={showPassword ? "text": "password"} name="password" id="password" placeholder='Contraseña'/>
                    </div>
                    <div className='viewPassword'>
                        <input type="checkbox" name="viewPassword" id="viewPassword" onClick={toggleShowPassword}/>
                        <label htmlFor="viewPassword">Mirar contraseña</label>
                    </div>
                    <div className='null-pass'>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type='submit'>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}

export default HeroLogin