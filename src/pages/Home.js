import React, { useState } from 'react';
import Footer from '../components/Footer';
import About from '../components/home/About';
import BestSellers from '../components/home/Bestsellers';
import Clients from '../components/home/Clients';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';


const Home = () => {
    return (
        <main>
            <Navbar />
            <Showcase />
            <Clients />
            <BestSellers />
            <About />
            <Footer />
        </main>
    );
}

export default Home;