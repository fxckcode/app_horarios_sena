import React, { useState} from 'react'
import { BiGridAlt, BiCollection, BiBookAlt, BiGroup, BiTime, BiHistory, BiPieChartAlt, BiCog, BiLogOut, BiMenu } from 'react-icons/bi'
import { dropMenuLinks } from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons'
import './DropMenu.scss'

function DropMenu({typeUser = 'ADMIN'}) {

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'BiGridAlt':
                return <BiGridAlt />
            case 'BiCollection':
                return <BiCollection />
            case 'BiBookAlt':
                return <BiBookAlt />
            case 'BiGroup':
                return <BiGroup />
            case 'BiTime':
                return <BiTime />
            case 'BiHistory':
                return <BiHistory />
            case 'BiPieChartAlt':
                return <BiPieChartAlt />
            case 'BiCog':
                return <BiCog />
            case 'BiLogOut':
                return <BiLogOut />
        }
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = ()  => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <>
            <div className={`sidebar ${isMenuOpen ? '' : 'close'}`}>
                <div className='logo-details'>
                    <img src="./logo_white.png" alt="Logo SENA" width={60} height={60}/>
                </div>
                <ul className='nav-links'>
                    {
                        dropMenuLinks.map((drop) => (
                            <React.Fragment>
                                {drop.divider ? (<li><hr  className='solid'/></li>) : ''}
                                <li>
                                    <a href={drop.link}>
                                        {getIcon(drop.icon)}
                                    </a>
                                    <ul className='sub-menu black'>
                                        <li>
                                            <a className='link_name' href={drop.link}>{drop.name}</a>
                                        </li>
                                    </ul>
                                </li>
                            </React.Fragment>
                        ))  
                    }
                </ul>
            </div>
            <div className='navbar'>
                <nav className='navegation'>
                    <BiMenu className='menu' onClick={toggleMenu}/>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faBell}/>
                        </li>
                        <li className='profile'>
                            <FontAwesomeIcon icon={faUser} />
                            <p>Nombre de usuario</p>
                            <FontAwesomeIcon icon={faChevronUp} />
                            <ul className='submenu'>
                                <li>
                                    <a href="/profile">Perfil</a>
                                </li>
                                <li>
                                    <a href="#">Cerrar Sessión</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default DropMenu