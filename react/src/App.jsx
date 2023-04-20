import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import FichasPage from './Pages/FichasPage'
import './App.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path='/fichas' element={<FichasPage />}></Route>
        </Routes>
    )
}

export default App