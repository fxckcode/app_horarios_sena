import React, { useEffect, useState } from 'react'
import DropMenu from '../components/DropMenu/DropMenu'
import Hero from '../components/Hero/Hero'
import axios from 'axios';
function HomePage() {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     fetch('/api/user', {
    //         method: 'GET',
    //         headeres: {'Authorization': `Bearer ${token}`}
    //     })
    //         .then(response => response.json())
    //         .then(data => setUser(data))
    //         .catch(error => console.error(error))
    // }, []);


    const [home, setHome] = useState([])

    useEffect(() => {
        const getHome = async () => {
            const apiHome = await axios.get('http://127.0.0.1:8000/api/home')
            setHome(apiHome.data)
        }
        getHome();
    }, [])

    return (
        <>
            <DropMenu user={home} />
            <Hero />
        </>
    )
}

export default HomePage