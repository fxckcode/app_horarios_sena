import React, { useEffect } from 'react'
import NavbarLogin from '../components/NavbarLogin/NavbarLogin'
import HeroLogin from '../components/HeroLogin/HeroLogin'
import '../scss/LoginPage.scss'

function LoginPage() {

  useEffect(() => {
    document.title = "Login SENA"
  }, [])
  
  return (
    <>
      <NavbarLogin />
      <HeroLogin />
    </>    
  )
}

export default LoginPage