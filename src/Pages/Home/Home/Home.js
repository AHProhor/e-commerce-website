import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TrendyProducts from '../TrendyProducts/TrendyProducts';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <TrendyProducts></TrendyProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;