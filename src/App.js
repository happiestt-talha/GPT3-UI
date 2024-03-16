import React from 'react'
import './App.css'
import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Possibility, WhatGPT3, Footer, Header, } from './container';

function App() {
    return (
        <div>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
