import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AllNfts from '../components/placeToStay/AllNfts';
import Filter from '../components/placeToStay/Filter';

const PlaceToStay = () => {
    return (
        <main>
            <Navbar />
            <Filter />
            <AllNfts />

            <Footer />
        </main>
    );
}

export default PlaceToStay;