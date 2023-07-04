import React from 'react'
import {Routes, BrowserRouter, Route, Router} from 'react-router-dom'
import {LandingPage} from "./LandingPage/LandingPage";
import {LandingPage2} from "./LandingPage/LandingPage2";
export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LandingPage/>}/>
                <Route path={'/org'} element={<LandingPage2/>}/>
            </Routes>
        </BrowserRouter>
    )
}
