import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import './App.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
        </Routes>
    )
}

export default App