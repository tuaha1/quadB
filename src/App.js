import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from './pages/MoviePage';
import MovieDetails from './pages/MovieDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MoviePage />}></Route>
                <Route path='/details' element={<MovieDetails />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App