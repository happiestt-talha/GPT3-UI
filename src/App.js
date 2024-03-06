import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Possibility, WhatGPT3, Footer, Header, } from './container';

function App() {
    return (
        <div>
            <h1>Comonents</h1>
            <Article />
            <Navbar />
            <Brand />
            <Feature />
            <CTA />
            <h1>Containers</h1>
            <Header />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
