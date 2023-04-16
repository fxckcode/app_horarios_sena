import React, { useEffect, useState } from 'react'
import DropMenu from '../components/DropMenu/DropMenu'
import Hero from '../components/Hero/Hero'

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

    return (
        <>
            <DropMenu />
            <Hero />
        </>
    )
}

export default HomePage